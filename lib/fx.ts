export type FxRate = { tryToEur: number; updatedAt: number };
let cached: FxRate | null = null;

export async function getTryToEur(): Promise<FxRate> {
  const now = Date.now();
  const maxAge = (Number(process.env.FX_REFRESH_HOURS || 12)) * 3600 * 1000;
  if (cached && now - cached.updatedAt < maxAge) return cached;

  const fallback = Number(process.env.FX_TRY_EUR_FALLBACK || 0.028);
  const src = process.env.FX_SOURCE_URL ||
    "https://api.exchangerate.host/latest?base=TRY&symbols=EUR";
  try {
    const res = await fetch(src, { cache: "no-store" });
    if (!res.ok) throw new Error(String(res.status));
    const json = await res.json();
    const rate = Number(json?.rates?.EUR);
    if (!rate || !isFinite(rate)) throw new Error("invalid rate");
    cached = { tryToEur: rate, updatedAt: now };
    return cached;
  } catch {
    cached = { tryToEur: fallback, updatedAt: now };
    return cached;
  }
}

export const formatTRY = (v:number)=>
  new Intl.NumberFormat("tr-TR",{style:"currency",currency:"TRY"}).format(v);
export const formatEUR = (v:number)=>
  new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(v);

export async function labelTryWithEur(tryAmount:number){
  const { tryToEur } = await getTryToEur();
  const eur = tryAmount * tryToEur;
  return `${formatTRY(tryAmount)} (≈ ${formatEUR(eur)})`;
}

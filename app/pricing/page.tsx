import { labelTryWithEur } from "@/lib/fx";

export default async function Pricing() {
  const premium = await labelTryWithEur(Number(process.env.PREMIUM_PRICE_TRY || 99));
  const pro = await labelTryWithEur(Number(process.env.PRO_PRICE_TRY || 199));

  return (
    <main style={{ padding: 24 }}>
      <h1>Fiyatlar</h1>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
          <h2>Premium</h2>
          <p style={{ fontSize: 24 }}>{premium} / ay</p>
          <ul>
            <li>Sınırsız yorum</li>
            <li>Ayda 5 video (1080p, filigransız)</li>
            <li>Öncelikli kuyruk</li>
          </ul>
        </div>
        <div style={{ border: "2px solid #6b46c1", borderRadius: 12, padding: 16 }}>
          <h2>Pro</h2>
          <p style={{ fontSize: 24 }}>{pro} / ay</p>
          <ul>
            <li>Sınırsız (4K export)</li>
            <li>Özel koçluk raporu</li>
            <li>Özel şablonlar & API</li>
          </ul>
        </div>
      </div>

      <p style={{ marginTop: 12, opacity: 0.7, fontSize: 12 }}>
        Not: € tutar bilgilendirme amaçlı yaklaşık değerdir; tahsilat TRY ile yapılır.
      </p>
    </main>
  );
}

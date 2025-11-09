import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>DreamOracle</h1>
      <p>Rüya yorumlama + fal + animasyon video (MVP)</p>
      <p><Link href="/pricing">→ Fiyatlar (₺ + ≈€)</Link></p>
    </main>
  );
}

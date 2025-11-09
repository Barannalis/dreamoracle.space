export const metadata = { title: "DreamOracle", description: "Dream & Fortune platform" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

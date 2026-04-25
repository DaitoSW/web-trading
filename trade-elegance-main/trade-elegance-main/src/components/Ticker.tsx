const items = [
  { sym: "BTC/USD", price: "67,432.18", chg: "+2.34%", up: true },
  { sym: "ETH/USD", price: "3,521.04", chg: "+1.82%", up: true },
  { sym: "EUR/USD", price: "1.0834", chg: "-0.21%", up: false },
  { sym: "AAPL", price: "228.91", chg: "+0.94%", up: true },
  { sym: "TSLA", price: "248.50", chg: "-1.12%", up: false },
  { sym: "GOLD", price: "2,384.20", chg: "+0.67%", up: true },
  { sym: "S&P 500", price: "5,634.82", chg: "+0.43%", up: true },
  { sym: "NDX", price: "19,820.41", chg: "+0.88%", up: true },
  { sym: "OIL", price: "78.42", chg: "-0.55%", up: false },
  { sym: "SOL/USD", price: "168.92", chg: "+4.21%", up: true },
];

export function Ticker() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/50 py-3">
      <div className="flex gap-10 animate-ticker whitespace-nowrap">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-3 font-mono text-sm">
            <span className="text-muted-foreground">{it.sym}</span>
            <span className="text-foreground font-medium">{it.price}</span>
            <span className={it.up ? "text-bull" : "text-bear"}>
              {it.up ? "▲" : "▼"} {it.chg}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

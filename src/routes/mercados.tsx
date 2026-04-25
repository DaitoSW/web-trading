import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ticker } from "@/components/Ticker";
import { TrendingUp, TrendingDown } from "lucide-react";

export const Route = createFileRoute("/mercados")({
  head: () => ({
    meta: [
      { title: "Mercados — APEX Trading" },
      { name: "description", content: "Cotizaciones en tiempo real de cripto, forex, acciones y commodities." },
      { property: "og:title", content: "Mercados en vivo — APEX" },
      { property: "og:description", content: "Datos de mercado institucionales en tiempo real." },
    ],
  }),
  component: MercadosPage,
});

const categories = ["Todos", "Cripto", "Forex", "Acciones", "Commodities"];

const markets = [
  { sym: "BTC/USD", name: "Bitcoin", price: "67,432.18", chg: 2.34, vol: "42.1B", cat: "Cripto" },
  { sym: "ETH/USD", name: "Ethereum", price: "3,521.04", chg: 1.82, vol: "18.4B", cat: "Cripto" },
  { sym: "SOL/USD", name: "Solana", price: "168.92", chg: 4.21, vol: "3.2B", cat: "Cripto" },
  { sym: "EUR/USD", name: "Euro / Dólar", price: "1.0834", chg: -0.21, vol: "98.2B", cat: "Forex" },
  { sym: "GBP/USD", name: "Libra / Dólar", price: "1.2654", chg: 0.18, vol: "45.7B", cat: "Forex" },
  { sym: "USD/JPY", name: "Dólar / Yen", price: "149.82", chg: -0.42, vol: "62.1B", cat: "Forex" },
  { sym: "AAPL", name: "Apple Inc.", price: "228.91", chg: 0.94, vol: "412M", cat: "Acciones" },
  { sym: "TSLA", name: "Tesla Inc.", price: "248.50", chg: -1.12, vol: "892M", cat: "Acciones" },
  { sym: "NVDA", name: "NVIDIA", price: "138.42", chg: 3.18, vol: "1.2B", cat: "Acciones" },
  { sym: "GOLD", name: "Oro spot", price: "2,384.20", chg: 0.67, vol: "8.4B", cat: "Commodities" },
  { sym: "OIL", name: "Crude WTI", price: "78.42", chg: -0.55, vol: "12.1B", cat: "Commodities" },
  { sym: "SILVER", name: "Plata", price: "29.84", chg: 1.24, vol: "2.1B", cat: "Commodities" },
];

function MercadosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <Ticker />
      <main className="flex-1 mx-auto max-w-7xl px-6 py-16 w-full">
        <div className="mb-12 animate-fade-up">
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">// Datos en vivo</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">Mercados</h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Cotizaciones de los principales activos en tiempo real con análisis técnico integrado.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`px-4 py-2 rounded-lg text-sm font-medium font-mono transition-colors ${
                i === 0 ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="glass rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <th className="px-6 py-4">Activo</th>
                <th className="px-6 py-4 text-right">Precio</th>
                <th className="px-6 py-4 text-right">24h</th>
                <th className="px-6 py-4 text-right hidden md:table-cell">Volumen</th>
                <th className="px-6 py-4 text-right hidden md:table-cell">Categoría</th>
              </tr>
            </thead>
            <tbody>
              {markets.map((m, i) => (
                <tr key={m.sym} className="border-b border-border/50 last:border-0 hover:bg-surface/50 transition-colors" style={{ animation: `fade-up 0.4s ease-out ${i * 0.04}s both` }}>
                  <td className="px-6 py-5">
                    <div className="font-display font-semibold">{m.sym}</div>
                    <div className="text-xs text-muted-foreground">{m.name}</div>
                  </td>
                  <td className="px-6 py-5 text-right font-mono font-medium">${m.price}</td>
                  <td className="px-6 py-5 text-right">
                    <span className={`inline-flex items-center gap-1 font-mono text-sm font-semibold ${m.chg >= 0 ? "text-bull" : "text-bear"}`}>
                      {m.chg >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {m.chg >= 0 ? "+" : ""}{m.chg}%
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right font-mono text-sm text-muted-foreground hidden md:table-cell">${m.vol}</td>
                  <td className="px-6 py-5 text-right hidden md:table-cell">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-surface text-muted-foreground">{m.cat}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

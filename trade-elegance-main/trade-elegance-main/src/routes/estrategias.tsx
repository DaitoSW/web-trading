import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Bot, LineChart, Repeat, Target, Activity, Cpu } from "lucide-react";

export const Route = createFileRoute("/estrategias")({
  head: () => ({
    meta: [
      { title: "Estrategias — APEX Trading" },
      { name: "description", content: "Estrategias algorítmicas, scalping, swing trading y arbitraje multi-exchange." },
      { property: "og:title", content: "Estrategias de trading — APEX" },
      { property: "og:description", content: "Algoritmos profesionales con backtesting verificado." },
    ],
  }),
  component: EstrategiasPage,
});

const strategies = [
  { icon: Bot, name: "Momentum AI", roi: "+34.2%", desc: "Algoritmo de momentum impulsado por LSTM que detecta rupturas tempranas en activos cripto.", risk: "Medio", trades: "1,420" },
  { icon: Repeat, name: "Mean Reversion", roi: "+18.7%", desc: "Captura desviaciones estadísticas en pares forex de alta liquidez con stop dinámico.", risk: "Bajo", trades: "3,180" },
  { icon: Target, name: "Scalping HFT", roi: "+42.1%", desc: "Operaciones de microsegundos sobre órdenes en spreads bid-ask anómalos.", risk: "Alto", trades: "84K" },
  { icon: LineChart, name: "Swing Quant", roi: "+24.6%", desc: "Posiciones de 3-7 días basadas en patrones de Elliott y volumen on-chain.", risk: "Medio", trades: "412" },
  { icon: Activity, name: "Arbitraje Cross", roi: "+12.3%", desc: "Explotación de diferencias de precio simultáneas entre 14 exchanges globales.", risk: "Bajo", trades: "9,820" },
  { icon: Cpu, name: "Neural Hedge", roi: "+28.9%", desc: "Cobertura adaptativa con redes neuronales profundas y análisis de sentimiento.", risk: "Medio", trades: "680" },
];

function EstrategiasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-7xl px-6 py-16 w-full">
        <div className="mb-16 max-w-3xl animate-fade-up">
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">// Algoritmos verificados</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
            Estrategias que <span className="text-gradient-bull">ejecutan solas</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Cada algoritmo ha sido backtested con datos de los últimos 10 años y opera 24/7 en servidores dedicados con co-locación en NY4 y LD4.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {strategies.map((s, i) => (
            <div key={s.name} className="glass rounded-2xl p-7 hover:border-primary/50 transition-all group" style={{ animation: `fade-up 0.5s ease-out ${i * 0.08}s both` }}>
              <div className="flex items-start justify-between mb-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-muted-foreground uppercase">ROI 12m</div>
                  <div className="font-display text-2xl font-bold text-bull">{s.roi}</div>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <div className="flex items-center justify-between pt-5 border-t border-border font-mono text-xs">
                <span className="text-muted-foreground">Riesgo: <span className="text-foreground">{s.risk}</span></span>
                <span className="text-muted-foreground">Trades: <span className="text-foreground">{s.trades}</span></span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass rounded-3xl p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">¿Construyes tu propia estrategia?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Nuestro motor permite codificar en Python, JavaScript o sin código con bloques visuales. Backtesting ilimitado incluido.
          </p>
          <button className="px-7 py-4 rounded-xl bg-primary text-primary-foreground font-semibold glow-bull hover:scale-[1.02] transition-transform">
            Abrir el editor de algoritmos
          </button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

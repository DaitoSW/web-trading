import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Shield, BarChart3, Globe, Brain, Layers } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ticker } from "@/components/Ticker";
import { ChartViz } from "@/components/ChartViz";
import heroImg from "@/assets/hero-trading.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "APEX — Plataforma de trading institucional" },
      { name: "description", content: "Ejecuta operaciones con latencia ultrabaja, datos en tiempo real y estrategias algorítmicas avanzadas." },
      { property: "og:title", content: "APEX — Trading sin límites" },
      { property: "og:description", content: "Plataforma profesional de trading con tecnología institucional." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Zap, title: "Latencia <2ms", desc: "Ejecución directa a los principales exchanges del mundo sin intermediarios." },
  { icon: Brain, title: "IA predictiva", desc: "Modelos de machine learning entrenados con 15 años de datos del mercado." },
  { icon: Shield, title: "Custodia segura", desc: "Cold storage segregado y póliza de seguro de hasta $250M en activos." },
  { icon: BarChart3, title: "200+ indicadores", desc: "Análisis técnico avanzado con TradingView y herramientas propietarias." },
  { icon: Globe, title: "Mercados globales", desc: "Acceso 24/7 a forex, cripto, acciones, futuros y commodities." },
  { icon: Layers, title: "API institucional", desc: "WebSocket FIX 4.4 y REST con throughput de 50,000 órdenes/seg." },
];

const stats = [
  { v: "$48B", l: "Volumen anual" },
  { v: "120K+", l: "Traders activos" },
  { v: "99.99%", l: "Uptime SLA" },
  { v: "1.2ms", l: "Latencia media" },
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-primary mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              MERCADOS ABIERTOS · NYSE +0.43%
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Opera como
              <br />
              <span className="text-gradient-bull">institución.</span>
              <br />
              Vive como
              <br />
              individuo.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
              Acceso directo a los mercados globales con la infraestructura que usan los hedge funds más sofisticados del mundo.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/mercados"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-semibold glow-bull hover:scale-[1.02] transition-transform"
              >
                Empezar a operar
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/estrategias"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-border bg-surface/50 font-semibold hover:bg-surface transition-colors"
              >
                Ver estrategias
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="glass rounded-2xl p-6 glow-bull">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-mono text-xs text-muted-foreground">BTC/USD · 1H</div>
                  <div className="font-display text-3xl font-bold mt-1">$67,432.18</div>
                </div>
                <div className="text-right">
                  <div className="text-bull font-mono text-sm font-semibold">+2.34%</div>
                  <div className="text-muted-foreground font-mono text-xs">+$1,540.22</div>
                </div>
              </div>
              <ChartViz />
              <div className="grid grid-cols-4 gap-2 mt-4 font-mono text-xs">
                {["1H", "4H", "1D", "1W"].map((t, i) => (
                  <div key={t} className={`text-center py-2 rounded ${i === 0 ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-6 -right-6 glass rounded-xl p-4 animate-float" style={{ animationDelay: "1s" }}>
              <div className="font-mono text-xs text-muted-foreground">P&L hoy</div>
              <div className="font-display text-2xl font-bold text-bull">+$8,420</div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="glass rounded-2xl p-8 text-center hover:glow-bull transition-all">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient-bull">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground font-mono uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">// Tecnología</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Infraestructura forjada para <span className="text-gradient-bull">ganar</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group glass rounded-2xl p-8 hover:border-primary/40 transition-all">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-5">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl glass p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
              El próximo movimiento del mercado <span className="shimmer-text">no espera.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Únete a 120,000 traders que ya operan con la velocidad y precisión de APEX.
            </p>
            <Link
              to="/contacto"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold glow-bull hover:scale-[1.02] transition-transform"
            >
              Abrir cuenta gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

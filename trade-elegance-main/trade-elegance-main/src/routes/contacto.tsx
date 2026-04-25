import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — APEX Trading" },
      { name: "description", content: "Habla con nuestro equipo de traders institucionales 24/7." },
      { property: "og:title", content: "Contacto — APEX" },
      { property: "og:description", content: "Soporte profesional 24/7 para traders." },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-7xl px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-fade-up">
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">// Estamos aquí</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
              Hablemos de <span className="text-gradient-bull">tu próximo trade</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Nuestro equipo de traders institucionales responde en menos de 4 minutos, los 365 días del año.
            </p>

            <div className="mt-12 space-y-4">
              {[
                { icon: Mail, label: "Email", val: "trading@apex.io" },
                { icon: Phone, label: "Mesa de operaciones", val: "+34 900 123 456" },
                { icon: MessageCircle, label: "Chat en vivo", val: "Disponible 24/7" },
              ].map((c) => (
                <div key={c.label} className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/50 transition-all">
                  <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase">{c.label}</div>
                    <div className="font-display font-semibold">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 md:p-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            {sent ? (
              <div className="text-center py-12">
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/20 text-primary flex items-center justify-center mb-6 glow-bull">
                  <ArrowRight className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Mensaje enviado</h3>
                <p className="text-muted-foreground">Un trader de APEX te contactará en breve.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <h2 className="font-display text-2xl font-bold mb-2">Solicita acceso</h2>
                <p className="text-sm text-muted-foreground mb-6">Cuentas desde $5,000 USD de capital inicial.</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase text-muted-foreground mb-2">Nombre</label>
                    <input required className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase text-muted-foreground mb-2">Apellido</label>
                    <input required className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase text-muted-foreground mb-2">Email</label>
                  <input type="email" required className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase text-muted-foreground mb-2">Capital aproximado</label>
                  <select className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors">
                    <option>$5K - $25K</option>
                    <option>$25K - $100K</option>
                    <option>$100K - $1M</option>
                    <option>$1M+</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase text-muted-foreground mb-2">Mensaje</label>
                  <textarea rows={4} className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none" />
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-semibold glow-bull hover:scale-[1.01] transition-transform">
                  Enviar solicitud
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

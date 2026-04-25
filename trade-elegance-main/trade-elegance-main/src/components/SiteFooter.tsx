import { Link } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-gold">
              <TrendingUp className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-bold">APEX<span className="text-primary">.</span></span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            La plataforma de trading institucional para inversores que exigen ejecución precisa y datos en tiempo real.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Plataforma</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/mercados" className="hover:text-foreground">Mercados</Link></li>
            <li><Link to="/estrategias" className="hover:text-foreground">Estrategias</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Términos</li>
            <li>Privacidad</li>
            <li>Riesgos</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} APEX TRADING · El trading conlleva riesgo de pérdida de capital.
      </div>
    </footer>
  );
}

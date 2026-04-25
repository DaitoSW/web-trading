// Animated SVG candlestick + line chart for hero visualization
const candles = [
  { x: 20, o: 120, c: 100, h: 95, l: 130, up: true },
  { x: 50, o: 100, c: 90, h: 85, l: 110, up: true },
  { x: 80, o: 90, c: 110, h: 115, l: 85, up: false },
  { x: 110, o: 90, c: 75, h: 70, l: 100, up: true },
  { x: 140, o: 75, c: 85, h: 90, l: 70, up: false },
  { x: 170, o: 85, c: 65, h: 60, l: 95, up: true },
  { x: 200, o: 65, c: 55, h: 50, l: 80, up: true },
  { x: 230, o: 55, c: 70, h: 75, l: 50, up: false },
  { x: 260, o: 55, c: 40, h: 35, l: 70, up: true },
  { x: 290, o: 40, c: 30, h: 25, l: 50, up: true },
  { x: 320, o: 30, c: 45, h: 50, l: 25, up: false },
  { x: 350, o: 30, c: 20, h: 15, l: 50, up: true },
];

const linePath = "M 20,110 L 50,95 L 80,100 L 110,82 L 140,80 L 170,72 L 200,60 L 230,62 L 260,45 L 290,35 L 320,40 L 350,25";
const areaPath = `${linePath} L 350,180 L 20,180 Z`;

export function ChartViz() {
  return (
    <div className="relative w-full">
      <svg viewBox="0 0 380 200" className="w-full h-auto">
        <defs>
          <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.22 145)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.78 0.22 145)" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid */}
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" y1={y} x2="380" y2={y} stroke="oklch(0.78 0.22 145 / 0.08)" />
        ))}

        {/* Candles */}
        {candles.map((c, i) => (
          <g key={i} style={{ animation: `fade-up 0.5s ease-out ${i * 0.06}s both` }}>
            <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.up ? "oklch(0.78 0.22 145)" : "oklch(0.65 0.24 25)"} strokeWidth="1" />
            <rect
              x={c.x - 5}
              y={Math.min(c.o, c.c)}
              width="10"
              height={Math.abs(c.o - c.c)}
              fill={c.up ? "oklch(0.78 0.22 145)" : "oklch(0.65 0.24 25)"}
              opacity="0.85"
            />
          </g>
        ))}

        {/* Trend line */}
        <path d={areaPath} fill="url(#areaGrad)" />
        <path d={linePath} fill="none" stroke="oklch(0.82 0.16 85)" strokeWidth="2" filter="url(#glow)" strokeDasharray="600" strokeDashoffset="600">
          <animate attributeName="stroke-dashoffset" from="600" to="0" dur="2.5s" fill="freeze" />
        </path>

        {/* End dot */}
        <circle cx="350" cy="25" r="4" fill="oklch(0.82 0.16 85)" filter="url(#glow)">
          <animate attributeName="r" values="4;7;4" dur="1.6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

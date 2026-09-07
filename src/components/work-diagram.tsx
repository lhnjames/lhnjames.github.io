import {
  Braces,
  Bot,
  Network,
  ShieldCheck,
  GitBranch,
  Layers,
  Gauge,
  Database,
  Workflow,
  CheckCheck,
  FileText,
  Cpu,
  Repeat2,
  ScanSearch,
  Binary,
  Speech,
  ChartNoAxesCombined,
} from "lucide-react";

const symbols = {
  code: Braces,
  agent: Bot,
  graph: Network,
  guard: ShieldCheck,
  route: GitBranch,
  layers: Layers,
  speed: Gauge,
  data: Database,
  tools: Workflow,
  check: CheckCheck,
  text: FileText,
  gpu: Cpu,
  loop: Repeat2,
  search: ScanSearch,
  bits: Binary,
  voice: Speech,
  eval: ChartNoAxesCombined,
};
type SymbolName = keyof typeof symbols;
export type DiagramSpec = {
  label: string;
  steps: [string, string, string];
  icons: [SymbolName, SymbolName, SymbolName];
  theme?: "blue" | "green" | "purple";
};

/** Conceptual workflow thumbnails, not experimental results or architecture claims. */
export function WorkDiagram({
  label,
  steps,
  icons,
  theme = "blue",
}: DiagramSpec) {
  const color = { blue: "#2878a5", green: "#398575", purple: "#7a67a0" }[theme];
  return (
    <svg
      className="work-diagram"
      viewBox="0 0 240 112"
      role="img"
      aria-label={label}
    >
      <title>{label}</title>
      <rect width="240" height="112" rx="5" fill="#f7f9fb" />
      <g stroke={color} strokeWidth="1.5" fill="none" opacity=".6">
        <path d="M64 44H91m-5-4 5 4-5 4M144 44h27m-5-4 5 4-5 4" />
      </g>
      {steps.map((step, index) => {
        const Icon = symbols[icons[index]];
        return (
          <g key={step} transform={`translate(${index * 80},0)`}>
            <rect
              x="18"
              y="22"
              width="44"
              height="44"
              rx="10"
              fill="white"
              stroke={color}
              strokeOpacity=".25"
            />
            <Icon
              x={28}
              y={32}
              width={24}
              height={24}
              color={color}
              strokeWidth={1.6}
            />
            <text
              x="40"
              y="87"
              textAnchor="middle"
              fontSize="10.5"
              fontFamily="Arial, sans-serif"
              fill="#465564"
            >
              {step}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

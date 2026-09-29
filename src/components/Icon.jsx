import {
  Layers, Network, BrainCircuit, ChartNoAxesCombined, ShieldCheck, Sprout,
  Plane, HeartHandshake, UtensilsCrossed, Sparkles,
} from "lucide-react";

// Explicit map keeps the bundle small (only these icons are shipped).
const icons = {
  Layers, Network, BrainCircuit, ChartNoAxesCombined, ShieldCheck, Sprout,
  Plane, HeartHandshake, UtensilsCrossed,
};

export default function Icon({ name, ...props }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp aria-hidden="true" {...props} />;
}

import { Ban, Camera, ChevronDown, CircleMinus, Image, RectangleVertical, RefreshCw, Share, SlidersHorizontal, Smartphone, Sparkles, Type, PenLine } from "lucide-react";
import { AppleLogo } from "./Btn";

const map = {
  text: Type, image: Image, ratio: RectangleVertical, refresh: RefreshCw, phone: Smartphone, spark: Sparkles,
  ban: Ban, camera: Camera, share: Share, sliders: SlidersHorizontal, minus: CircleMinus, chevron: ChevronDown, pen: PenLine,
};

/** Line icons from lucide; "apple" is the App Store logo. */
export default function Icon({ name, className = "icon-svg" }: { name: string; className?: string }) {
  if (name === "apple") return <AppleLogo />;
  const C = map[name as keyof typeof map] ?? Sparkles;
  return <C className={className} strokeWidth={1.6} aria-hidden="true" />;
}

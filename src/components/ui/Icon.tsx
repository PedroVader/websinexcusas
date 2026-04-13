import {
  Monitor,
  MapPin,
  Wrench,
  Target,
  Trophy,
  Star,
  Article,
  ShieldCheck,
  FloppyDisk,
  Broadcast,
  Lifebuoy,
  PencilSimple,
  ChartBar,
  Lightning,
  CurrencyDollar,
  ShoppingCart,
  Browser,
  ArrowsClockwise,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import type { ComponentProps } from "react";

const iconMap = {
  monitor: Monitor,
  "map-pin": MapPin,
  wrench: Wrench,
  target: Target,
  trophy: Trophy,
  star: Star,
  article: Article,
  "shield-check": ShieldCheck,
  "floppy-disk": FloppyDisk,
  broadcast: Broadcast,
  lifebuoy: Lifebuoy,
  "pencil-simple": PencilSimple,
  "chart-bar": ChartBar,
  lightning: Lightning,
  "currency-dollar": CurrencyDollar,
  "shopping-cart": ShoppingCart,
  browser: Browser,
  "arrows-clockwise": ArrowsClockwise,
  check: Check,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps extends ComponentProps<"svg"> {
  name: IconName;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}

export function Icon({
  name,
  size = 32,
  weight = "regular",
  className,
  ...props
}: IconProps) {
  const Component = iconMap[name];
  return <Component size={size} weight={weight} className={className} {...props} />;
}

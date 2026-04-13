import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "success" | "dark";
  className?: string;
}

const variants = {
  brand: "bg-brand/10 text-brand-dark",
  success: "bg-success/10 text-success",
  dark: "bg-dark/10 text-dark",
};

export function Badge({ children, variant = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

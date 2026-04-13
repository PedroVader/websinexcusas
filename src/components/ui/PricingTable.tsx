import { Check } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import type { PlanPrecio } from "@/types";

interface PricingTableProps {
  plans: PlanPrecio[];
  title?: string;
  subtitle?: string;
}

export function PricingTable({ plans, title, subtitle }: PricingTableProps) {
  return (
    <div>
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl font-heading">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-dark-secondary">{subtitle}</p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.nombre}
            className={cn(
              "rounded-2xl p-8 flex flex-col",
              plan.destacado
                ? "bg-dark text-light ring-2 ring-brand relative"
                : "bg-white border border-gray-200"
            )}
          >
            {plan.destacado && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-dark text-sm font-bold px-4 py-1 rounded-full">
                Más elegido
              </span>
            )}
            <h3 className="text-xl font-bold font-heading">{plan.nombre}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold font-heading">
                {plan.precio}
              </span>
              {plan.periodo && (
                <span
                  className={
                    plan.destacado ? "text-gray-400" : "text-gray-500"
                  }
                >
                  {plan.periodo}
                </span>
              )}
            </div>
            <p
              className={cn(
                "mt-2 text-sm",
                plan.destacado ? "text-gray-400" : "text-dark-secondary"
              )}
            >
              {plan.descripcion}
            </p>
            <ul className="mt-6 space-y-3 flex-1">
              {plan.caracteristicas.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check size={18} weight="bold" className="text-success mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                href="/presupuesto"
                variant={plan.destacado ? "primary" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

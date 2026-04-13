"use client";

import { useActionState } from "react";
import { submitPresupuestoForm } from "@/app/actions/presupuesto";
import { Button } from "@/components/ui/Button";
import type { FormPresupuestoState } from "@/types";

const initialState: FormPresupuestoState = {
  success: false,
  message: "",
};

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitPresupuestoForm, initialState);

  if (state.success) {
    return (
      <div className="rounded-2xl bg-success/10 p-8 text-center">
        <p className="text-xl font-bold text-success font-heading">
          ¡Solicitud recibida!
        </p>
        <p className="mt-2 text-dark-secondary">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-dark mb-1">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-brand focus:ring-1 focus:ring-brand outline-none"
            placeholder="Tu nombre"
          />
          {state.errors?.nombre && (
            <p className="mt-1 text-sm text-red-600">{state.errors.nombre[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-brand focus:ring-1 focus:ring-brand outline-none"
            placeholder="tu@email.com"
          />
          {state.errors?.email && (
            <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-dark mb-1">
            Teléfono / WhatsApp *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-brand focus:ring-1 focus:ring-brand outline-none"
            placeholder="600 123 456"
          />
          {state.errors?.telefono && (
            <p className="mt-1 text-sm text-red-600">{state.errors.telefono[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="municipio" className="block text-sm font-medium text-dark mb-1">
            Municipio *
          </label>
          <input
            type="text"
            id="municipio"
            name="municipio"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-brand focus:ring-1 focus:ring-brand outline-none"
            placeholder="Ej: Sabadell"
          />
          {state.errors?.municipio && (
            <p className="mt-1 text-sm text-red-600">{state.errors.municipio[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="tipoNegocio" className="block text-sm font-medium text-dark mb-1">
          Tipo de negocio *
        </label>
        <input
          type="text"
          id="tipoNegocio"
          name="tipoNegocio"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-brand focus:ring-1 focus:ring-brand outline-none"
          placeholder="Ej: Restaurante, Clínica dental, Taller..."
        />
        {state.errors?.tipoNegocio && (
          <p className="mt-1 text-sm text-red-600">{state.errors.tipoNegocio[0]}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-dark mb-2">
          ¿Tienes web actualmente? *
        </label>
        <div className="flex gap-4">
          {[
            { value: "si", label: "Sí" },
            { value: "no", label: "No" },
            { value: "no-seguro", label: "No estoy seguro" },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tieneWeb"
                value={option.value}
                required
                className="text-brand focus:ring-brand"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
        {state.errors?.tieneWeb && (
          <p className="mt-1 text-sm text-red-600">{state.errors.tieneWeb[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-dark mb-1">
          Mensaje (opcional)
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-brand focus:ring-1 focus:ring-brand outline-none resize-none"
          placeholder="Cuéntanos qué necesitas, qué te preocupa, o cualquier detalle relevante..."
        />
      </div>

      {state.message && !state.success && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <Button type="submit" variant="primary" className="w-full" disabled={pending}>
        {pending ? "Enviando..." : "Pedir Presupuesto Gratis"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Respondemos en menos de 24 horas. Sin compromiso.
      </p>
    </form>
  );
}

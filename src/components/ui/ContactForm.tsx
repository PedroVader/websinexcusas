"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import type { FormContactoState } from "@/types";

const initialState: FormContactoState = { success: false, message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="rounded-2xl bg-success/10 p-8 text-center">
        <p className="text-xl font-bold text-success font-heading">
          ¡Mensaje enviado!
        </p>
        <p className="mt-2 text-dark-secondary">
          Te respondemos en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="space-y-6"
    >
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-dark mb-1">
          Nombre *
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          minLength={2}
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

      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-dark mb-1">
          Teléfono / WhatsApp *
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          required
          minLength={9}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-brand focus:ring-1 focus:ring-brand outline-none"
          placeholder="600 123 456"
        />
        {state.errors?.telefono && (
          <p className="mt-1 text-sm text-red-600">{state.errors.telefono[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-dark mb-1">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-brand focus:ring-1 focus:ring-brand outline-none resize-none"
          placeholder="Cuéntanos qué necesitas..."
        />
        {state.errors?.mensaje && (
          <p className="mt-1 text-sm text-red-600">{state.errors.mensaje[0]}</p>
        )}
      </div>

      {state.message && !state.success && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <Button type="submit" variant="primary" className="w-full" disabled={pending}>
        {pending ? "Enviando..." : "Enviar Mensaje"}
      </Button>
    </form>
  );
}

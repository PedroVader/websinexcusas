"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Error al enviar. Inténtalo de nuevo.");
      }
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-success/10 p-8 text-center">
        <p className="text-xl font-bold text-success font-heading">
          ¡Solicitud recibida!
        </p>
        <p className="mt-2 text-dark-secondary">
          Te respondemos en menos de 24 horas. Sin compromiso.
        </p>
      </div>
    );
  }

  return (
    <form
      name="presupuesto"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="presupuesto" />
      <p className="hidden">
        <label>
          No rellenar: <input name="bot-field" />
        </label>
      </p>

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
            minLength={2}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-brand focus:ring-1 focus:ring-brand outline-none"
            placeholder="Tu nombre"
          />
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
            minLength={9}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-brand focus:ring-1 focus:ring-brand outline-none"
            placeholder="600 123 456"
          />
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

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <Button type="submit" variant="primary" className="w-full" disabled={submitting}>
        {submitting ? "Enviando..." : "Pedir Presupuesto Gratis"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Respondemos en menos de 24 horas. Sin compromiso.
      </p>
    </form>
  );
}

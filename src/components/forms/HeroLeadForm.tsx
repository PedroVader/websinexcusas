"use client";

import { useState } from "react";
import { servicios } from "@/data/servicios";

export function HeroLeadForm() {
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
      <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
        <div className="text-4xl mb-3">&#10003;</div>
        <p className="text-xl font-bold text-brand font-heading">
          ¡Recibido!
        </p>
        <p className="mt-2 text-gray-300 text-sm">
          Te llamamos en menos de 24h.
        </p>
      </div>
    );
  }

  return (
    <form
      name="hero-lead"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="hero-lead" />
      <p className="hidden">
        <label>
          No rellenar: <input name="bot-field" />
        </label>
      </p>

      <p className="text-base sm:text-lg font-bold font-heading mb-1">
        Pide tu presupuesto gratis
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
        Te respondemos en menos de 24h
      </p>

      <div className="space-y-3 sm:space-y-4">
        <div>
          <input
            type="text"
            name="nombre"
            required
            minLength={2}
            placeholder="Tu nombre"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2.5 sm:px-4 sm:py-3 text-light placeholder:text-gray-400 focus:border-brand focus:ring-1 focus:ring-brand outline-none text-sm"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            required
            placeholder="Tu email"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2.5 sm:px-4 sm:py-3 text-light placeholder:text-gray-400 focus:border-brand focus:ring-1 focus:ring-brand outline-none text-sm"
          />
        </div>

        <div>
          <input
            type="tel"
            name="telefono"
            required
            minLength={9}
            placeholder="Teléfono / WhatsApp"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2.5 sm:px-4 sm:py-3 text-light placeholder:text-gray-400 focus:border-brand focus:ring-1 focus:ring-brand outline-none text-sm"
          />
        </div>

        <div>
          <select
            name="servicio"
            required
            defaultValue=""
            className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2.5 sm:px-4 sm:py-3 text-light focus:border-brand focus:ring-1 focus:ring-brand outline-none text-sm [&>option]:text-dark"
          >
            <option value="" disabled>
              ¿Qué necesitas?
            </option>
            {servicios.map((s) => (
              <option key={s.slug} value={s.nombre}>
                {s.nombre} — desde {s.precioDesde}
              </option>
            ))}
            <option value="No lo tengo claro">No lo tengo claro</option>
          </select>
        </div>

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="aceptaTerminos"
            required
            className="mt-1 rounded border-white/20 text-brand focus:ring-brand"
          />
          <span className="text-xs text-gray-400">
            Acepto la{" "}
            <a href="/politica-privacidad" className="underline hover:text-brand">
              política de privacidad
            </a>
          </span>
        </label>
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 sm:mt-6 w-full rounded-lg bg-brand text-dark font-bold py-2.5 sm:py-3 px-6 hover:bg-brand-dark transition-colors duration-200 disabled:opacity-50 cursor-pointer text-sm"
      >
        {submitting ? "Enviando..." : "Quiero mi presupuesto →"}
      </button>

      <p className="mt-3 text-xs text-gray-500 text-center">
        Sin compromiso · Sin letra pequeña
      </p>
    </form>
  );
}

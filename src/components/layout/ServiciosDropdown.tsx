"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const serviciosNav = [
  {
    slug: "diseno-web",
    nombre: "Diseño Web",
    descripcionCorta: "Webs profesionales que traen clientes",
    precioDesde: "490€",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M9 10l-2 2 2 2" />
        <path d="M15 10l2 2-2 2" />
      </svg>
    ),
  },
  {
    slug: "seo-local",
    nombre: "SEO Local",
    descripcionCorta: "Que te encuentren en Google",
    precioDesde: "150€/mes",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M10 7v6" />
        <path d="M7 10h6" />
      </svg>
    ),
  },
  {
    slug: "mantenimiento-web",
    nombre: "Mantenimiento Web",
    descripcionCorta: "Tu web siempre al día",
    precioDesde: "50€/mes",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    slug: "google-ads",
    nombre: "Google Ads",
    descripcionCorta: "Resultados desde el día uno",
    precioDesde: "200€/mes",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12l5-8 5 8" />
        <path d="M7.5 8h5" />
        <circle cx="18" cy="16" r="4" />
        <circle cx="18" cy="16" r="1.5" fill="currentColor" stroke="none" />
        <path d="M4 16h8" />
        <path d="M4 20h8" />
      </svg>
    ),
  },
];

export function ServiciosDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href="/servicios"
        className="text-sm font-medium text-dark-secondary hover:text-dark transition-colors flex items-center gap-1"
      >
        Servicios
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="w-[340px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-2">
            {serviciosNav.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <span className="shrink-0 mt-0.5 text-brand group-hover:scale-110 transition-transform">
                  {s.icon}
                </span>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold text-dark group-hover:text-brand transition-colors">
                      {s.nombre}
                    </span>
                    <span className="text-xs font-medium text-brand">
                      {s.precioDesde}
                    </span>
                  </div>
                  <p className="text-xs text-dark-secondary mt-0.5">
                    {s.descripcionCorta}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 p-2">
            <Link
              href="/servicios"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1 p-2 text-xs font-medium text-dark-secondary hover:text-brand transition-colors rounded-lg hover:bg-gray-50"
            >
              Ver todos los servicios
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5.25 3.5L8.75 7L5.25 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiciosMobileList({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3 text-dark hover:bg-gray-100 rounded-lg font-medium"
      >
        Servicios
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4 pb-2 space-y-1">
          {serviciosNav.map((s) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <span className="text-brand shrink-0">{s.icon}</span>
              <div>
                <span className="text-sm font-medium text-dark group-hover:text-brand transition-colors">
                  {s.nombre}
                </span>
                <span className="text-xs text-dark-secondary ml-2">
                  {s.precioDesde}
                </span>
              </div>
            </Link>
          ))}
          <Link
            href="/servicios"
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-dark-secondary hover:text-brand rounded-lg hover:bg-gray-100"
          >
            Ver todos los servicios →
          </Link>
        </div>
      </div>
    </div>
  );
}

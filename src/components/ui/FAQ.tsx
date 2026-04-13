"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { FAQ as FAQType } from "@/types";

interface FAQProps {
  faqs: FAQType[];
  title?: string;
  subtitle?: string;
}

export function FAQ({ faqs, title, subtitle }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="flex w-full items-center justify-between text-left cursor-pointer"
            >
              <span className="text-lg font-medium text-dark pr-4">
                {faq.pregunta}
              </span>
              <span
                className={cn(
                  "shrink-0 text-brand transition-transform duration-200",
                  openIndex === index && "rotate-45"
                )}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                openIndex === index ? "max-h-96 mt-3" : "max-h-0"
              )}
            >
              <p className="text-dark-secondary leading-relaxed">
                {faq.respuesta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

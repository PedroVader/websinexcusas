import { z } from "zod";

export const contactFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un email válido"),
  telefono: z.string().min(9, "Introduce un teléfono válido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export const presupuestoFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un email válido"),
  telefono: z.string().min(9, "Introduce un teléfono válido"),
  municipio: z.string().min(2, "Indica tu municipio"),
  tipoNegocio: z.string().min(2, "Indica el tipo de negocio"),
  tieneWeb: z.enum(["si", "no", "no-seguro"]),
  mensaje: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type PresupuestoFormData = z.infer<typeof presupuestoFormSchema>;

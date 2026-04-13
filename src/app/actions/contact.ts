"use server";

import { contactFormSchema } from "@/lib/schemas";
import type { FormContactoState } from "@/types";

export async function submitContactForm(
  _prevState: FormContactoState,
  formData: FormData
): Promise<FormContactoState> {
  const rawData = {
    nombre: formData.get("nombre") as string,
    email: formData.get("email") as string,
    telefono: formData.get("telefono") as string,
    mensaje: formData.get("mensaje") as string,
  };

  const result = contactFormSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Por favor, revisa los campos del formulario.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  // In production, send email via Resend or similar service
  console.log("Contact form submission:", result.data);

  return {
    success: true,
    message:
      "Gracias por contactarnos. Te responderemos en menos de 24 horas.",
  };
}

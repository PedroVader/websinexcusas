"use server";

import { presupuestoFormSchema } from "@/lib/schemas";
import type { FormPresupuestoState } from "@/types";

export async function submitPresupuestoForm(
  _prevState: FormPresupuestoState,
  formData: FormData
): Promise<FormPresupuestoState> {
  const rawData = {
    nombre: formData.get("nombre") as string,
    email: formData.get("email") as string,
    telefono: formData.get("telefono") as string,
    municipio: formData.get("municipio") as string,
    tipoNegocio: formData.get("tipoNegocio") as string,
    tieneWeb: formData.get("tieneWeb") as string,
    mensaje: (formData.get("mensaje") as string) || undefined,
  };

  const result = presupuestoFormSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Por favor, revisa los campos del formulario.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  // In production, send email via Resend or similar service
  console.log("Quote form submission:", result.data);

  return {
    success: true,
    message:
      "¡Solicitud recibida! Revisaremos tu caso y te contactaremos en menos de 24 horas con un presupuesto personalizado.",
  };
}

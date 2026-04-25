"use server";

import { presupuestoFormSchema } from "@/lib/schemas";
import { resend, contactEmail } from "@/lib/resend";
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

  const { nombre, email, telefono, municipio, tipoNegocio, tieneWeb, mensaje } = result.data;

  const tieneWebLabel =
    tieneWeb === "si" ? "Sí" : tieneWeb === "no" ? "No" : "No está seguro";

  const { error } = await resend.emails.send({
    from: "Web Sin Excusas <onboarding@resend.dev>",
    to: contactEmail,
    replyTo: email,
    subject: `Nuevo presupuesto: ${nombre} — ${tipoNegocio} en ${municipio}`,
    html: `
      <h2>Nueva solicitud de presupuesto</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Municipio:</strong> ${municipio}</p>
      <p><strong>Tipo de negocio:</strong> ${tipoNegocio}</p>
      <p><strong>¿Tiene web?:</strong> ${tieneWebLabel}</p>
      ${mensaje ? `<p><strong>Mensaje:</strong></p><p>${mensaje}</p>` : ""}
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      success: false,
      message: "Error al enviar la solicitud. Inténtalo de nuevo.",
    };
  }

  return {
    success: true,
    message:
      "¡Solicitud recibida! Revisaremos tu caso y te contactaremos en menos de 24 horas con un presupuesto personalizado.",
  };
}

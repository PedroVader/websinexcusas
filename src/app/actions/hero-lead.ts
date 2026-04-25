"use server";

import { z } from "zod";
import { resend, contactEmail } from "@/lib/resend";

const heroLeadSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().min(9),
  servicio: z.string().min(1),
});

export async function submitHeroLead(
  _prevState: { success: boolean; message: string },
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const rawData = {
    nombre: formData.get("nombre") as string,
    email: formData.get("email") as string,
    telefono: formData.get("telefono") as string,
    servicio: formData.get("servicio") as string,
  };

  const result = heroLeadSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Por favor, revisa los campos del formulario.",
    };
  }

  const { nombre, email, telefono, servicio } = result.data;

  const { error } = await resend.emails.send({
    from: "Web Sin Excusas <onboarding@resend.dev>",
    to: contactEmail,
    replyTo: email,
    subject: `Nuevo lead: ${nombre} — ${servicio}`,
    html: `
      <h2>Nuevo lead desde la home</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Servicio:</strong> ${servicio}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      success: false,
      message: "Error al enviar. Inténtalo de nuevo.",
    };
  }

  return {
    success: true,
    message: "¡Recibido! Te llamamos en menos de 24h.",
  };
}

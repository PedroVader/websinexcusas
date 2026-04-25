import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);
export const contactEmail = process.env.CONTACT_EMAIL || "info@websinexcusas.es";

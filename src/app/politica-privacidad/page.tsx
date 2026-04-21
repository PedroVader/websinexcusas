import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Política de Privacidad",
  description: `Política de privacidad de ${siteConfig.empresa}. Información sobre el tratamiento de datos personales conforme al RGPD.`,
  path: "/politica-privacidad",
});

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Container className="py-8">
        <Breadcrumbs items={[{ label: "Política de Privacidad" }]} />
      </Container>

      <Container className="pb-20">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="font-heading text-3xl font-bold text-dark mb-8">
            Política de Privacidad
          </h1>

          <h2>1. Responsable del tratamiento</h2>
          <ul>
            <li><strong>Identidad:</strong> {siteConfig.empresa}</li>
            <li><strong>NIF:</strong> {siteConfig.cif}</li>
            <li><strong>Dirección:</strong> {siteConfig.direccion}</li>
            <li><strong>Correo electrónico:</strong> {siteConfig.email}</li>
            <li><strong>Teléfono:</strong> {siteConfig.telefono}</li>
          </ul>

          <h2>2. Finalidad del tratamiento</h2>
          <p>
            En {siteConfig.empresa} tratamos la información que nos facilitan
            las personas interesadas con las siguientes finalidades:
          </p>
          <ul>
            <li>
              <strong>Formulario de contacto:</strong> atender y responder a las
              consultas, solicitudes o peticiones de información recibidas.
            </li>
            <li>
              <strong>Formulario de presupuesto:</strong> elaborar y enviar
              presupuestos personalizados de nuestros servicios de diseño web,
              SEO local, mantenimiento web y Google Ads.
            </li>
            <li>
              <strong>Comunicaciones comerciales:</strong> enviar información
              sobre nuestros servicios, únicamente cuando el usuario haya dado su
              consentimiento expreso.
            </li>
          </ul>

          <h2>3. Legitimación</h2>
          <p>La base legal para el tratamiento de datos es:</p>
          <ul>
            <li>
              El <strong>consentimiento del interesado</strong> al enviar un
              formulario de contacto o presupuesto (artículo 6.1.a del RGPD).
            </li>
            <li>
              El <strong>interés legítimo</strong> del responsable para atender
              consultas comerciales (artículo 6.1.f del RGPD).
            </li>
            <li>
              La <strong>ejecución precontractual</strong> cuando se solicita un
              presupuesto (artículo 6.1.b del RGPD).
            </li>
          </ul>

          <h2>4. Datos recopilados</h2>
          <p>Los datos personales que podemos recopilar incluyen:</p>
          <ul>
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Municipio</li>
            <li>Tipo de negocio</li>
            <li>Información sobre si dispone de web actualmente</li>
            <li>Cualquier información adicional que el usuario incluya en el mensaje</li>
          </ul>

          <h2>5. Conservación de los datos</h2>
          <p>
            Los datos personales se conservarán mientras exista un interés mutuo
            para mantener la finalidad del tratamiento. Cuando ya no sean
            necesarios, se suprimirán con las medidas de seguridad adecuadas
            para garantizar la anonimización o la destrucción total de los
            mismos.
          </p>
          <p>
            Los datos de contacto y presupuesto se conservarán durante un máximo
            de <strong>2 años</strong> desde la última comunicación, salvo
            obligación legal de conservación.
          </p>

          <h2>6. Destinatarios</h2>
          <p>
            Los datos personales no serán cedidos a terceros, salvo obligación
            legal. No se realizan transferencias internacionales de datos.
          </p>

          <h2>7. Derechos del interesado</h2>
          <p>
            Cualquier persona tiene derecho a obtener confirmación sobre si en{" "}
            {siteConfig.empresa} estamos tratando datos personales que le
            conciernan. Las personas interesadas tienen derecho a:
          </p>
          <ul>
            <li><strong>Acceso:</strong> conocer qué datos personales tratamos.</li>
            <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
            <li><strong>Limitación:</strong> solicitar la limitación del tratamiento.</li>
            <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado.</li>
            <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos.</li>
          </ul>
          <p>
            Para ejercer estos derechos, puede enviar un correo electrónico a{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
            indicando el derecho que desea ejercer y adjuntando copia de su DNI o
            documento identificativo equivalente.
          </p>
          <p>
            También tiene derecho a presentar una reclamación ante la Agencia
            Española de Protección de Datos (
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.aepd.es
            </a>
            ) si considera que el tratamiento no se ajusta a la normativa
            vigente.
          </p>

          <h2>8. Medidas de seguridad</h2>
          <p>
            {siteConfig.empresa} ha adoptado las medidas técnicas y
            organizativas necesarias para garantizar la seguridad e integridad
            de los datos personales, evitando su alteración, pérdida,
            tratamiento o acceso no autorizado. El sitio web utiliza certificado
            SSL para cifrar las comunicaciones entre el navegador y el servidor.
          </p>

          <h2>9. Modificaciones</h2>
          <p>
            {siteConfig.empresa} se reserva el derecho a modificar la presente
            política de privacidad para adaptarla a novedades legislativas o
            jurisprudenciales. En dichos supuestos, se anunciará en esta página
            los cambios introducidos.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Última actualización: abril 2026
          </p>
        </div>
      </Container>
    </>
  );
}

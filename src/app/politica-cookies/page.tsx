import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Política de Cookies",
  description: `Política de cookies de ${siteConfig.domain}. Información sobre el uso de cookies en este sitio web.`,
  path: "/politica-cookies",
});

export default function PoliticaCookiesPage() {
  return (
    <>
      <Container className="py-8">
        <Breadcrumbs items={[{ label: "Política de Cookies" }]} />
      </Container>

      <Container className="pb-20">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="font-heading text-3xl font-bold text-dark mb-8">
            Política de Cookies
          </h1>

          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web
            almacenan en el navegador del usuario cuando este los visita. Se
            utilizan para facilitar la navegación, recordar preferencias y
            recopilar información estadística sobre el uso del sitio web.
          </p>

          <h2>2. ¿Qué cookies utiliza este sitio web?</h2>
          <p>
            Actualmente, <strong>{siteConfig.domain}</strong> utiliza las
            siguientes categorías de cookies:
          </p>

          <h3>Cookies técnicas (necesarias)</h3>
          <p>
            Son imprescindibles para el funcionamiento del sitio web. Permiten
            la navegación y el uso de las funciones básicas. No requieren
            consentimiento.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookie_consent</td>
                <td>Almacena la preferencia de cookies del usuario</td>
                <td>1 año</td>
              </tr>
            </tbody>
          </table>

          <h3>Cookies analíticas</h3>
          <p>
            Permiten medir y analizar la navegación de los usuarios en el sitio
            web con el fin de mejorar los servicios ofrecidos. Estas cookies
            solo se instalan con el consentimiento del usuario.
          </p>

          <h2>3. ¿Cómo gestionar las cookies?</h2>
          <p>
            Puede permitir, bloquear o eliminar las cookies instaladas en su
            equipo mediante la configuración de las opciones del navegador:
          </p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/Borrar%20cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p>
            Si desactiva las cookies, es posible que algunas funciones del sitio
            web no estén disponibles o no funcionen correctamente.
          </p>

          <h2>4. Cookies de terceros</h2>
          <p>
            En caso de integrar servicios de terceros (como Google Analytics o
            herramientas de marketing) en el futuro, se actualizará esta
            política con la información detallada de las cookies utilizadas por
            dichos servicios. En todo caso, se solicitará el consentimiento
            previo del usuario antes de su instalación.
          </p>

          <h2>5. Actualizaciones</h2>
          <p>
            {siteConfig.empresa} puede modificar esta política de cookies en
            función de nuevas exigencias legislativas, regulatorias, o con la
            finalidad de adaptar dicha política a las instrucciones dictadas por
            la Agencia Española de Protección de Datos.
          </p>

          <h2>6. Más información</h2>
          <p>
            Para más información sobre el tratamiento de sus datos personales,
            consulte nuestra{" "}
            <a href="/politica-privacidad">Política de Privacidad</a>. Si tiene
            dudas sobre nuestra política de cookies, puede contactarnos en{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Última actualización: abril 2026
          </p>
        </div>
      </Container>
    </>
  );
}

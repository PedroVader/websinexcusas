import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Aviso Legal",
  description: `Aviso legal de ${siteConfig.empresa}. Información sobre el titular del sitio web ${siteConfig.domain}.`,
  path: "/aviso-legal",
});

export default function AvisoLegalPage() {
  return (
    <>
      <Container className="py-8">
        <Breadcrumbs items={[{ label: "Aviso Legal" }]} />
      </Container>

      <Container className="pb-20">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="font-heading text-3xl font-bold text-dark mb-8">
            Aviso Legal
          </h1>

          <h2>1. Datos identificativos</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y Comercio Electrónico
            (LSSI-CE), se informa al usuario de los datos del titular de este
            sitio web:
          </p>
          <ul>
            <li><strong>Denominación social:</strong> {siteConfig.empresa}</li>
            <li><strong>NIF:</strong> {siteConfig.cif}</li>
            <li><strong>Domicilio social:</strong> {siteConfig.direccion}</li>
            <li><strong>Correo electrónico:</strong> {siteConfig.email}</li>
            <li><strong>Teléfono:</strong> {siteConfig.telefono}</li>
            <li><strong>Sitio web:</strong> {siteConfig.url}</li>
          </ul>

          <h2>2. Objeto</h2>
          <p>
            Este sitio web tiene como finalidad informar sobre los servicios de
            diseño web, posicionamiento SEO local, mantenimiento web y gestión
            de campañas de Google Ads que ofrece {siteConfig.empresa} para
            negocios locales de la provincia de Barcelona.
          </p>

          <h2>3. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos de este sitio web, incluyendo textos,
            fotografías, gráficos, imágenes, iconos, tecnología, software, así
            como su diseño gráfico y código fuente, son propiedad intelectual de{" "}
            {siteConfig.empresa} o de terceros que han autorizado su uso, sin
            que puedan entenderse cedidos al usuario ninguno de los derechos de
            explotación sobre los mismos más allá de lo estrictamente necesario
            para el correcto uso del sitio web.
          </p>
          <p>
            La reproducción, distribución, comercialización o transformación no
            autorizada de estos contenidos constituye una infracción de los
            derechos de propiedad intelectual de {siteConfig.empresa}.
          </p>

          <h2>4. Condiciones de uso</h2>
          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y
            servicios ofrecidos a través de este sitio web y a no emplearlos
            para:
          </p>
          <ul>
            <li>
              Realizar actividades ilícitas o contrarias a la buena fe y al
              orden público.
            </li>
            <li>
              Difundir contenidos o propaganda de carácter racista, xenófobo,
              pornográfico, de apología del terrorismo o que atente contra los
              derechos humanos.
            </li>
            <li>
              Provocar daños en los sistemas físicos y lógicos de{" "}
              {siteConfig.empresa}, de sus proveedores o de terceros.
            </li>
          </ul>

          <h2>5. Exclusión de responsabilidad</h2>
          <p>
            {siteConfig.empresa} no se hace responsable de los daños y
            perjuicios que pudieran derivarse del uso de la información y
            contenidos de este sitio web. Asimismo, no garantiza la ausencia de
            virus u otros elementos que pudieran causar alteraciones en el
            sistema informático del usuario.
          </p>
          <p>
            {siteConfig.empresa} se reserva el derecho de modificar los
            contenidos del sitio web sin previo aviso y sin que exista obligación
            alguna de comunicarlo a los usuarios.
          </p>

          <h2>6. Enlaces externos</h2>
          <p>
            Este sitio web puede contener enlaces a páginas externas.{" "}
            {siteConfig.empresa} no se hace responsable de los contenidos ni del
            estado de dichos sitios web, y el acceso a los mismos a través de
            este sitio web no implica que {siteConfig.empresa} recomiende o
            apruebe sus contenidos.
          </p>

          <h2>7. Legislación aplicable y jurisdicción</h2>
          <p>
            Para la resolución de cualquier controversia que pudiera derivarse
            del acceso a este sitio web, serán de aplicación las leyes españolas,
            sometiéndose las partes a la jurisdicción de los Juzgados y
            Tribunales de Sabadell, Barcelona.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Última actualización: abril 2026
          </p>
        </div>
      </Container>
    </>
  );
}

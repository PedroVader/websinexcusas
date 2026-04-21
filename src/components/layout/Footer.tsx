import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import municipiosData from "@/data/municipios.json";

export function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Web Sin Excusas"
              width={180}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-gray-400 text-sm">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-gray-400 text-sm">
              {siteConfig.empresa}
              <br />
              CIF: {siteConfig.cif}
              <br />
              {siteConfig.sede}
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-bold font-heading text-sm uppercase tracking-wider mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/diseno-web" className="text-gray-400 hover:text-brand text-sm transition-colors">
                  Diseño Web
                </Link>
              </li>
              <li>
                <Link href="/servicios/seo-local" className="text-gray-400 hover:text-brand text-sm transition-colors">
                  SEO Local
                </Link>
              </li>
              <li>
                <Link href="/servicios/mantenimiento-web" className="text-gray-400 hover:text-brand text-sm transition-colors">
                  Mantenimiento Web
                </Link>
              </li>
              <li>
                <Link href="/servicios/google-ads" className="text-gray-400 hover:text-brand text-sm transition-colors">
                  Google Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* Municipios */}
          <div>
            <h3 className="font-bold font-heading text-sm uppercase tracking-wider mb-4">
              Diseño Web en...
            </h3>
            <ul className="space-y-2">
              {municipiosData.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/diseno-web-${m.slug}`}
                    className="text-gray-400 hover:text-brand text-sm transition-colors"
                  >
                    {m.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold font-heading text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-400 hover:text-brand text-sm transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.telefono}`}
                  className="text-gray-400 hover:text-brand text-sm transition-colors"
                >
                  {siteConfig.telefono}
                </a>
              </li>
              <li className="pt-4">
                <Link href="/presupuesto" className="text-brand hover:text-brand-light font-bold text-sm transition-colors">
                  Pide Presupuesto Gratis →
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-brand text-sm transition-colors">
                  Formulario de Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <Link href="/aviso-legal" className="hover:text-brand transition-colors">
              Aviso Legal
            </Link>
            <Link href="/politica-privacidad" className="hover:text-brand transition-colors">
              Privacidad
            </Link>
            <Link href="/politica-cookies" className="hover:text-brand transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

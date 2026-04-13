import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ServiciosDropdown } from "./ServiciosDropdown";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold font-heading text-dark">
              Web <span className="text-brand">Sin Excusas</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <ServiciosDropdown />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark-secondary hover:text-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button href="/presupuesto" variant="primary" size="sm">
              Pide Presupuesto Gratis
            </Button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const platforms = [
  {
    name: "Google",
    logo: "/logos/google.svg",
    width: 100,
    height: 34,
    imgClass: "h-6 sm:h-8 w-auto",
    stars: true,
    starsColor: "text-[#FBBC04]",
  },
  {
    name: "Facebook",
    logo: "/logos/facebook.png",
    width: 36,
    height: 36,
    imgClass: "h-6 sm:h-8 w-auto",
    stars: true,
    starsColor: "text-[#1877F2]",
  },
  {
    name: "Trustpilot",
    logo: "/logos/trustpilot.svg",
    width: 130,
    height: 34,
    imgClass: "h-5 sm:h-7 w-auto",
    stars: true,
    starsColor: "text-[#00B67A]",
  },
];

function Stars({ className, size }: { className: string; size: number }) {
  return (
    <div className={`flex gap-0.5 justify-center ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} weight="fill" />
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="py-4 bg-white border-y border-gray-200">
      <Container>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-8">
          {/* Left: text */}
          <ScrollReveal>
            <div className="text-center sm:text-left shrink-0">
              <p className="text-sm sm:text-base font-bold text-dark">
                Barcelona confía en nosotros
              </p>
              <p className="text-xs sm:text-sm text-dark-secondary">
                Valoración de 5 estrellas
              </p>
            </div>
          </ScrollReveal>

          {/* Right: logos */}
          <div className="flex items-center gap-6 sm:gap-12">
            {platforms.map((platform, i) => (
              <ScrollReveal key={platform.name} delay={i * 80}>
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={platform.width}
                    height={platform.height}
                    className={`${platform.imgClass} object-contain`}
                  />
                  {platform.stars && platform.starsColor && (
                    <>
                      <div className="hidden sm:block">
                        <Stars className={platform.starsColor} size={18} />
                      </div>
                      <div className="sm:hidden">
                        <Stars className={platform.starsColor} size={14} />
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

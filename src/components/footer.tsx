import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

const topFiveLinks = [
  { href: "/top-5/camping", text: "Top 5 – Camping" },
  { href: "/top-5/extrema", text: "Top 5 – Extrema" },
  { href: "/top-5/popular", text: "Top 5 – Más Popular" },
  { href: "/top-5/playa", text: "Top 5 – Playa" },
  { href: "/top-5/rio", text: "Top 5 – Río" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <Image
              src="/logo-white.png"
              alt="Alejate con Ale"
              width={150}
              height={80}
              className="mb-4"
            />
            <div className="flex flex-col space-y-2 text-sm">
              <p>Santo Domingo, República Dominicana</p>
              <Link
                href="tel:+18098163848"
                className="transition-colors hover:text-[#8CD4E8]"
              >
                +1 (809) 816-3848
              </Link>
              <Link
                href="mailto:alejandra@alejateconale.com"
                className="transition-colors hover:text-[#8CD4E8]"
              >
                alejandra@alejateconale.com
              </Link>
            </div>
          </div>

          {/* Top 5 Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Nuestros Top 5</h3>
            <ul className="space-y-2">
              {topFiveLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-[#8CD4E8]"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog and Social */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Nuestro Blog</h3>
              <Link
                href="/blog/11-cosas-que-hacer-en-guatape"
                className="group flex items-start gap-3"
              >
                <Image
                  src="/blog/guatape-thumbnail.jpg"
                  alt="11 Cosas Que Hacer En Guatapé"
                  width={80}
                  height={60}
                  className="rounded object-cover"
                />
                <div>
                  <h4 className="transition-colors group-hover:text-[#8CD4E8]">
                    11 Cosas Que Hacer En Guatapé
                  </h4>
                  <p className="text-sm text-gray-400">junio 10, 2020</p>
                </div>
              </Link>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">@alejateconale</h3>
              <div className="flex gap-4">
                <a
                  href="https://youtube.com/@alejateconale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-[#8CD4E8]"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com/alejateconale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-[#8CD4E8]"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex items-center justify-between border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400">Alejate Con Ale © 2020</p>
        </div>
      </div>
    </footer>
  );
}

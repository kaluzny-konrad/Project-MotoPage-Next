import { MenuIcon } from "lucide-react";
import Link from "next/link";
import WrapperMaxWidth from "./WrapperMaxWidth";

type Props = {};

export default function Nav({}: Props) {
  const pages = [
    { name: "Start", href: "/" },
    { name: "Oferta", href: "/oferta" },
    {
      name: "Porady",
      href: "/porady",
    },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
      <header className="relative bg-white">
        <WrapperMaxWidth>
          <div className="flex justify-between p-4">
            <div className="lg:hidden">
              <MenuIcon className="h-8" />
            </div>

            <Link href="/" className="flex items-center">
              <p className="font-bold">LOGO</p>
            </Link>

            <div className="hidden lg:block">
              <nav>
                {pages.map((page) => (
                  <Link key={page.name} href={page.href} className="p-4">
                    {page.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div></div>
          </div>
        </WrapperMaxWidth>
      </header>
    </div>
  );
}

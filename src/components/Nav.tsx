"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/react";
import { useState } from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold">LOGO</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {pages.map((page) => (
          <NavbarItem key={page.name}>
            <Link href={page.href} color="foreground">
              {page.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end" />

      <NavbarMenu>
        {pages.map((page, index) => (
          <NavbarMenuItem key={`${page}-${index}`}>
            <Link
              color={"primary"}
              className="w-full"
              href={page.href}
              size="lg"
            >
              {page.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// import { MenuIcon, XIcon } from "lucide-react";
import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleLinkClick } from "@/utils/handleLinkClick";
import { useRouter } from "next/navigation";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Methodology", href: "/methodology" },
    // { label: "Solutions", href: "/#features" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blogs", href: "/blogs" },
    { label: "Careers", href: "/careers" },
    // { label: "Demo Lumio Tools" , href:'/#demo'}
  ];

  const handleNavClick = (
    href: string,
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    handleLinkClick(href, e, router);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-8 flex h-16 items-center justify-between">
        {/* <div className="flex items-center  justify-center gap-8"> */}
          <Link
            href="/"
            className="flex justify-center items-center gap-2 cursor-pointer"
            onClick={(e) => handleNavClick("/", e)}
          >
            <div className="size-12">
              <img src="/images/logos/lumio-logo-v2.png" />
            </div>
            <span
              className={`text-2xl font-medium text-primary ${ubuntu.className}`}
            >
              Lumio AI
            </span>
          </Link>
          <nav className="hidden lg:flex flex-1 ml-auto items-center justify-center gap-16">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-lg font-normal hover:text-primary ${
                  currentPath === item.href ? "text-primary" : ""
                }`}
                onClick={(e) => handleNavClick(item.href, e)}
                id={`q5dn4m_${index}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfiMB-IkhNT95tBWyC6du56ENayUlBPEZ4G6QGa5s3aEYKsNw/viewform?usp=sharing"
            target="_blank"
          >
            <Button className="px-6">Book Your Free AI Consultation</Button>
          </Link>
        {/* </div> */}
        </div>
       
        {/* <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button> */}
      </div>
      {isMenuOpen && (
        <div className="lg:hidden border-t">
          <nav className="container flex flex-col gap-4 py-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm font-medium hover:text-primary ${
                  currentPath === item.href ? "text-primary" : ""
                }`}
                onClick={(e) => handleNavClick(item.href, e)}
                id={`o2mipr_${index}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t">
            <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfiMB-IkhNT95tBWyC6du56ENayUlBPEZ4G6QGa5s3aEYKsNw/viewform?usp=sharing"
            target="_blank"
          >
            <Button>Get Your Free AI Consultation</Button>
          </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

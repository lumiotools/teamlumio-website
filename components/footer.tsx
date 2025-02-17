"use client";
import { Button } from "@/components/ui/button";
import XIcon from "@/public/XIcon";
import { handleLinkClick } from "@/utils/handleLinkClick";
import { Facebook, LinkedinIcon } from "lucide-react";
import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export function Footer() {
  const router = useRouter();
  const links = {
    company: [
      {
        label: "About",
        href: "#about",
      },
      {
        label: "Blog",
        href: "/blogs",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Newsletter",
        href: "#newsletter",
      },
    ],
    resources: [
      {
        label: "Contact Us",
        href: "mailto:contact@teamlumio.ai",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        label: "Terms of Service",
        href: "/terms-of-service",
      },
    ],
    featured: [
      {
        label: "Enhance Customer Service with AI",
        href: "/blogs/5",
      },
      {
        label: "Transforming Finance with AI",
        href: "/blogs/4",
      },
      {
        label: "AI for ERPs",
        href: "/blogs/1",
      },
    ],

    social: [
      // { name: "Twitter", icon: TwitterIcon },
      {
        name: "LinkedIn",
        icon: LinkedinIcon,
        href: "https://www.linkedin.com/company/lumio-ai/",
      },
      { name: "Facebook",
        icon: Facebook, 
        href: "https://www.facebook.com/profile.php?id=61572705287113" 
      },
      { name: "Twitter",
        icon: XIcon, 
        href: "https://x.com/TeamLumioAI" 
      },
    ],
  };

  return (
    <footer className="border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8">
                  <img src="/images/logos/Lumio AI.png" />
                </div>
                <span
                  className={`text-xl font-bold text-primary ${ubuntu.className}`}
                >
                  Lumio AI
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-sm">
                Empowering businesses with intelligent AI workers for a more
                productive and efficient future.
              </p>
              <div className="flex gap-4">
                {links.social.map((social, index) => (
                  <Link
                    key={social.name}
                    id={`90gbu0_${index}`}
                    href={social.href}
                    target="_blank"
                  >
                    <Button variant="ghost" size="icon">
                      <social.icon className="h-5 w-5" id={`s19iip_${index}`} />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 w-full md:w-2/3">
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {links.company.map((link, index) => (
                    <li key={link.href} id={`7n1i06_${index}`}>
                      <Link
                        href={link.href}
                        onClick={(e) => handleLinkClick(link.href, e, router)}
                        className="text-muted-foreground hover:text-foreground"
                        id={`c0mmm7_${index}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  {links.resources.map((link, index) => (
                    <li key={link.href} id={`w5vb2m_${index}`}>
                      <Link
                        href={link.href}
                        onClick={(e) => handleLinkClick(link.href, e, router)}
                        className="text-muted-foreground hover:text-foreground"
                        id={`i0ciem_${index}`}
                        target={
                          link.href.startsWith("mailto") ? "_blank" : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Featured Blogs</h3>
                <ul className="space-y-3">
                  {links.featured.map((link, index) => (
                    <li key={link.href} id={`5n230i_${index}`}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground text-left"
                        id={`b7rs5y_${index}`}
                        onClick={(e) => handleLinkClick(link.href, e, router)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© 2025 Lumio AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

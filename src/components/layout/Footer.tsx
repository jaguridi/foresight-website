"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { siteConfig, navigation, footerContent } from "@/data/content";
import { asset } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLang();
  const content = footerContent[lang];
  const navItems = navigation[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image
              src={asset("/images/logos/logo-white.png")}
              alt="Foresight"
              width={150}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-slate-300 max-w-md leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{content.links}</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{content.contact}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-300 hover:text-cyan transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} {siteConfig.name}. {content.rights}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-cyan hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

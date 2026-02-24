"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 20);
    };

    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
              <Image
                src="/images/logo_marcenaria_oliveiras.jpg"
                alt="Marcenaria Oliveira's Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-playfair font-bold text-xl transition-colors ${
                isScrolled ? "text-wood-700" : "text-white"
              }`}>
                Oliveira&apos;s
              </span>
              <span className={`text-xs transition-colors ${
                isScrolled ? "text-wood-600" : "text-white/90"
              }`}>
                Marcenaria
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href ?? "/"}
                className={`font-medium transition-colors hover:text-wood-600 ${
                  isScrolled ? "text-wood-700" : "text-white"
                }`}
              >
                {link?.label ?? ""}
              </Link>
            ))}
            <Link
              href="/contato"
              className={`px-6 py-2 rounded-md font-medium transition-all hover:shadow-lg ${
                isScrolled
                  ? "bg-wood-600 text-white hover:bg-wood-700"
                  : "bg-white text-wood-700 hover:bg-wood-50"
              }`}
            >
              Orçamento Grátis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled ? "text-wood-700 hover:bg-wood-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2">
                {navLinks?.map((link) => (
                  <Link
                    key={link?.href}
                    href={link?.href ?? "/"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-wood-700 hover:bg-wood-50 rounded-md transition-colors"
                  >
                    {link?.label ?? ""}
                  </Link>
                ))}
                <Link
                  href="/contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mx-4 px-4 py-2 bg-wood-600 text-white text-center rounded-md hover:bg-wood-700 transition-colors"
                >
                  Orçamento Grátis
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

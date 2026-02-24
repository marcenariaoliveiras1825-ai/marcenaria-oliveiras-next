import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-wood-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Marcenaria Oliveira&apos;s</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Marcenaria familiar especializada em móveis planejados e personalizados.
              Transformamos seus sonhos em realidade com acabamento impecável.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+554491438651"
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>(44) 9143-8651</span>
              </a>
              <a
                href="mailto:oliveiras.marcen@gmail.com"
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>oliveiras.marcen@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-white/80">
                <MapPin size={16} className="mt-0.5" />
                <span>José Faleiros Maia, Paiçandu - PR</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/marcenaria_oliveiras"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-wood-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/r.oliveira.marcenaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-wood-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>&copy; {new Date()?.getFullYear?.()} Marcenaria Oliveira&apos;s. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

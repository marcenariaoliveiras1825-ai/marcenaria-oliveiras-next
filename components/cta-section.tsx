"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Orçamento sem compromisso",
  "Parcelamento no cartão de crédito",
  "Atendimento personalizado",
  "Acabamento impecável",
];

export function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-wood-700 via-wood-600 to-forest-600 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Pronto para Transformar
              <br />Seu Ambiente?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Solicite um orçamento gratuito e descubra como podemos criar o móvel perfeito para você.
            </p>

            <div className="space-y-3 mb-8">
              {benefits?.map((benefit, index) => (
                <motion.div
                  key={benefit ?? index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="text-wood-200 flex-shrink-0" size={24} />
                  <span className="text-lg">{benefit ?? ""}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-wood-700 font-semibold rounded-md shadow-lg hover:shadow-xl hover:bg-wood-50 transition-all"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="https://wa.me/5541987361491"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all"
              >
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="font-playfair text-5xl font-bold mb-2">9+</div>
              <div className="text-white/80">Tipos de Serviços</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="font-playfair text-5xl font-bold mb-2">100%</div>
              <div className="text-white/80">Sob Medida</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="font-playfair text-5xl font-bold mb-2">7+</div>
              <div className="text-white/80">Cidades Atendidas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="font-playfair text-5xl font-bold mb-2">$$</div>
              <div className="text-white/80">Parcelamento</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

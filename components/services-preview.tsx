"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "./service-card";

const previewServices = [
  {
    title: "Móveis Planejados",
    description: "Projetos sob medida para todos os ambientes: cozinhas, quartos, salas e escritórios.",
    image: "/images/projeto_cozinha_01.jpg",
  },
  {
    title: "Guarda-roupas e Closets",
    description: "Design funcional com acabamento de qualidade para otimizar seu espaço.",
    image: "/images/projeto_closet_01.jpg",
  },
  {
    title: "Móveis Infantis Montessori",
    description: "Peças acessíveis e práticas que promovem a independência das crianças.",
    image: "/images/projeto_infantil_montessori_01.jpg",
  },
];

export function ServicesPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-wood-600 font-semibold text-sm uppercase tracking-wide mb-3 block">
            Nossos Serviços
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-wood-900 mb-4">
            Do Projeto à Realidade
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformamos suas ideias em móveis sob medida com acabamento impecável
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewServices?.map((service, index) => (
            <motion.div
              key={service?.title ?? index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/servicos"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-wood-600 hover:bg-wood-700 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all group"
          >
            <span>Ver Todos os Serviços</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

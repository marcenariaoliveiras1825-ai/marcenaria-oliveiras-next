"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const previewImages = [
  { src: "/images/projeto_closet_02.jpg", alt: "Closet planejado" },
  { src: "/images/projeto_armario_02.jpg", alt: "Armário sob medida" },
  { src: "/images/projeto_movel_planejado_01.jpg", alt: "Móvel planejado" },
  { src: "/images/projeto_movel_planejado_02.jpg", alt: "Detalhe de acabamento" },
  { src: "/images/projeto_comoda_01.jpg", alt: "Cômoda personalizada" },
  { src: "/images/projeto_area_gourmet_01.jpg", alt: "Área gourmet" },
];

export function GalleryPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-wood-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-wood-600 font-semibold text-sm uppercase tracking-wide mb-3 block">
            Nossos Projetos
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-wood-900 mb-4">
            Sonhos que Ganharam Vida
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada projeto sai do papel com forma, cor e vida, sempre com acabamento impecável
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {previewImages?.map((image, index) => (
            <motion.div
              key={image?.src ?? index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <Image
                src={image?.src ?? "/images/logo_marcenaria_oliveiras.jpg"}
                alt={image?.alt ?? "Projeto"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-900/80 via-wood-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
            href="/galeria"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-wood-600 hover:bg-wood-700 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all group"
          >
            <span>Ver Galeria Completa</span>
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

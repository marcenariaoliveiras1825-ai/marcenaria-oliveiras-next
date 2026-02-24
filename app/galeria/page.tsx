"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/images/projeto_closet_01.jpg", alt: "Closet planejado", category: "Closets" },
  { src: "/images/projeto_closet_02.jpg", alt: "Closet sob medida", category: "Closets" },
  { src: "/images/projeto_armario_01.jpg", alt: "Armário planejado", category: "Armários" },
  { src: "/images/projeto_armario_02.jpg", alt: "Armário com penteadeira LED", category: "Armários" },
  { src: "/images/projeto_movel_planejado_01.jpg", alt: "Móvel planejado", category: "Móveis" },
  { src: "/images/projeto_movel_planejado_02.jpg", alt: "Detalhe de acabamento", category: "Móveis" },
  { src: "/images/projeto_movel_planejado_03.jpg", alt: "Ambiente completo", category: "Móveis" },
  { src: "/images/projeto_movel_planejado_04.jpg", alt: "Móvel personalizado", category: "Móveis" },
  { src: "/images/projeto_cozinha_01.jpg", alt: "Cozinha planejada", category: "Cozinhas" },
  { src: "/images/projeto_quarto_01.jpg", alt: "Quarto planejado", category: "Quartos" },
  { src: "/images/projeto_sala_01.jpg", alt: "Sala planejada", category: "Salas" },
  { src: "/images/projeto_banheiro_01.jpg", alt: "Banheiro planejado", category: "Banheiros" },
  { src: "/images/projeto_escritorio_01.jpg", alt: "Escritório/Home Office", category: "Escritórios" },
  { src: "/images/projeto_comoda_01.jpg", alt: "Cômoda sob medida", category: "Móveis" },
  { src: "/images/projeto_area_gourmet_01.jpg", alt: "Área gourmet", category: "Áreas Gourmet" },
  {
    src: "/images/projeto_infantil_montessori_01.jpg",
    alt: "Móvel infantil Montessori",
    category: "Infantil",
  },
];

const categories = ["Todos", "Closets", "Armários", "Cozinhas", "Quartos", "Móveis", "Infantil"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const filteredImages =
    selectedCategory === "Todos"
      ? galleryImages
      : galleryImages?.filter((img) => img?.category === selectedCategory) ?? [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-wood-700 via-wood-600 to-forest-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-wood-200 font-semibold text-sm uppercase tracking-wide mb-4 block"
          >
            Nossa Galeria
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            Projetos que Ganharam Vida
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Cada móvel sai do papel com forma, cor e vida, sempre com acabamento impecável
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-30 backdrop-blur-lg bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories?.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category ?? "Todos")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-wood-600 text-white shadow-lg"
                    : "bg-wood-100 text-wood-700 hover:bg-wood-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-wood-50" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages?.map((image, index) => (
              <motion.div
                key={image?.src ?? index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage({ src: image?.src ?? "", alt: image?.alt ?? "" })}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <Image
                  src={image?.src ?? "/images/logo_marcenaria_oliveiras.jpg"}
                  alt={image?.alt ?? "Projeto"}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-900/80 via-wood-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium text-sm">{image?.alt ?? ""}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-wood-300 transition-colors"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-5xl aspect-square">
            <Image
              src={selectedImage?.src ?? ""}
              alt={selectedImage?.alt ?? ""}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

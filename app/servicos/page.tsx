"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Armchair,
  Baby,
  ChefHat,
  Sparkles,
  Laptop,
  Home,
  Shapes,
  Circle,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Móveis Planejados e Personalizados",
    description:
      "Projetos de móveis sob medida para todos os ambientes da casa, incluindo cozinhas, quartos, salas, escritórios e áreas gourmet. Cada projeto é desenvolvido para otimizar o espaço e atender às suas necessidades específicas.",
    image: "/images/projeto_movel_planejado_01.jpg",
  },
  {
    icon: Sparkles,
    title: "Peças Decorativas e Afetivas",
    description:
      "Criação de peças decorativas personalizadas e itens com valor sentimental, feitos sob medida com acabamento artesanal. Cada peça é única e especial.",
    image: "/images/projeto_sala_01.jpg",
  },
  {
    icon: Baby,
    title: "Móveis Infantis e Montessori",
    description:
      "Fabricação de móveis infantis seguindo a filosofia Montessori, com peças acessíveis e práticas que promovem a independência das crianças.",
    image: "/images/projeto_infantil_montessori_01.jpg",
  },
  {
    icon: Armchair,
    title: "Guarda-roupas Planejados",
    description:
      "Projetos de guarda-roupas e closets sob medida, com design funcional e acabamento de qualidade. Otimize seu espaço com elegância.",
    image: "/images/projeto_closet_02.jpg",
  },
  {
    icon: ChefHat,
    title: "Cozinhas Planejadas",
    description:
      "Projetos completos de cozinhas planejadas, incluindo armários, bancadas e fornos embutidos com moldura sob medida. Funcionalidade e beleza em harmonia.",
    image: "/images/projeto_cozinha_01.jpg",
  },
  {
    icon: Circle,
    title: "Fornos Embutidos",
    description:
      "Fornos embutidos com moldura sob medida e acabamento impecável, integrando perfeitamente ao design da sua cozinha. Sofisticação em cada detalhe.",
    image: "/images/projeto_movel_planejado_02.jpg",
  },
  {
    icon: Sparkles,
    title: "Penteadeiras com Espelho LED",
    description:
      "Projetos que unem guarda-roupas planejado e penteadeira com espelho LED (luz quente e fria) para elevar o espaço e a sua rotina. Elegância e funcionalidade.",
    image: "/images/projeto_armario_02.jpg",
  },
  {
    icon: Shapes,
    title: "Cômodas Sob Medida",
    description:
      "Fabricação de cômodas personalizadas, adaptadas ao seu espaço e estilo. Cada peça é única e feita com atenção aos detalhes.",
    image: "/images/projeto_comoda_01.jpg",
  },
  {
    icon: Laptop,
    title: "Escritórios e Home Office",
    description:
      "Projetos de escrivaninhas e móveis para escritório e home office, otimizando espaço e funcionalidade. Trabalhe com conforto e estilo.",
    image: "/images/projeto_escritorio_01.jpg",
  },
];

export default function ServicesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-wood-700 via-wood-600 to-forest-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/projeto_movel_planejado_03.jpg')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-wood-200 font-semibold text-sm uppercase tracking-wide mb-4 block"
          >
            Nossos Serviços
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            Móveis Sob Medida para Cada Necessidade
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Do projeto à instalação, criamos móveis planejados que transformam ambientes com
            funcionalidade, estética e acabamento impecável.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-wood-50" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, index) => {
              const Icon = service?.icon;
              return (
                <motion.div
                  key={service?.title ?? index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image
                      src={service?.image ?? "/images/logo_marcenaria_oliveiras.jpg"}
                      alt={service?.title ?? "Serviço"}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                      {Icon && <Icon className="text-wood-600" size={24} />}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-wood-900 mb-3 group-hover:text-wood-600 transition-colors">
                      {service?.title ?? ""}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service?.description ?? ""}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wood-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="mx-auto mb-6 text-wood-600" size={48} />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-wood-900 mb-4">
              Pronto para Começar Seu Projeto?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Solicite um orçamento gratuito e descubra como podemos transformar seu ambiente
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center px-8 py-4 bg-wood-600 hover:bg-wood-700 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all"
            >
              Solicitar Orçamento
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

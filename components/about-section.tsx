"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Heart,
    title: "Marcenaria Familiar",
    description: "Tradição e cuidado em cada projeto, como se fosse para nossa própria casa.",
  },
  {
    icon: Wrench,
    title: "Sob Medida",
    description: "Cada centímetro pensado para aproveitar seu espaço da melhor forma.",
  },
  {
    icon: Award,
    title: "Acabamento Impecável",
    description: "Atenção aos detalhes que fazem toda a diferença no resultado final.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Do projeto à instalação, acompanhamos cada etapa com você.",
  },
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-wood-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/projeto_cozinha_01.jpg"
                  alt="Cozinha planejada"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl mt-8">
                <Image
                  src="/images/projeto_quarto_01.jpg"
                  alt="Quarto planejado"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl -mt-8">
                <Image
                  src="/images/projeto_armario_01.jpg"
                  alt="Armário planejado"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/projeto_escritorio_01.jpg"
                  alt="Escritório planejado"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-wood-600 font-semibold text-sm uppercase tracking-wide mb-3 block">
              Sobre Nós
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-wood-900 mb-6 leading-tight">
              Qualidade e Tradição em Cada Detalhe
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <span className="font-semibold text-wood-700">Marcenaria Oliveira&apos;s</span> é uma
              marcenaria familiar localizada em Paiçandu, Paraná. Especializada em criar móveis sob
              medida que transformam ambientes, combinamos funcionalidade, estética e acabamento
              impecável em cada projeto.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Cada projeto começa com um sonho — e a melhor parte é ver esse sonho sair do papel e
              ganhar forma, cor e vida. Cada centímetro é pensado para aproveitar o espaço da melhor
              forma, atendendo às suas necessidades específicas.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features?.map((feature, index) => {
                const Icon = feature?.icon;
                return (
                  <motion.div
                    key={feature?.title ?? index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {Icon && (
                      <div className="flex-shrink-0 w-10 h-10 bg-wood-100 rounded-lg flex items-center justify-center">
                        <Icon className="text-wood-600" size={20} />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-wood-900 mb-1">{feature?.title ?? ""}</h3>
                      <p className="text-sm text-gray-600">{feature?.description ?? ""}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

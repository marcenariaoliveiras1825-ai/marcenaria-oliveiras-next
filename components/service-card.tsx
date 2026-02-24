"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    image: string;
  };
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <Image
          src={service?.image ?? "/images/logo_marcenaria_oliveiras.jpg"}
          alt={service?.title ?? "Serviço"}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wood-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-wood-900 mb-3 group-hover:text-wood-600 transition-colors">
          {service?.title ?? ""}
        </h3>
        <p className="text-gray-600 leading-relaxed">{service?.description ?? ""}</p>
      </div>
    </motion.div>
  );
}

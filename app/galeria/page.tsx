
"use client";

import Image from "next/image";
import { useState } from "react";

const categories = ["Todos", "Cozinhas", "Guarda-roupas", "Home Office", "Infantil"];

const projects = [
  { category: "Cozinhas", image: "/images/projeto_cozinha_01.jpg" },
  { category: "Guarda-roupas", image: "/images/projeto_closet_02.jpg" },
  { category: "Home Office", image: "/images/projeto_escritorio_01.jpg" },
  { category: "Infantil", image: "/images/projeto_infantil_montessori_01.jpg" },
];

export default function ProjetosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
          Projetos
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Móveis planejados sob medida desenvolvidos com precisão, estética e funcionalidade.
        </p>
      </section>

      {/* FILTROS */}
      <section className="flex justify-center gap-6 mb-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 border rounded-full transition ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <Image
                src={project.image}
                alt="Projeto"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

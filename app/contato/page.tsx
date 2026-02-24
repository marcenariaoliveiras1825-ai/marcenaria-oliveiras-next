"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response?.json?.();

      if (data?.success) {
        toast?.success?.("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast?.error?.(data?.message ?? "Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      console?.error?.("Error:", error);
      toast?.error?.("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e?.target ?? {};
    setFormData((prev) => ({ ...prev, [name ?? ""]: value ?? "" }));
  };

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
            Entre em Contato
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            Vamos Criar Juntos?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Solicite um orçamento gratuito e transforme seu ambiente com nossos móveis planejados
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-wood-50" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-playfair text-3xl font-bold text-wood-900 mb-6">
                  Informações de Contato
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Estamos prontos para atendê-lo e transformar seus sonhos em realidade. Entre em
                  contato conosco!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-wood-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-wood-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-900 mb-1">Telefone</h3>
                    <a
                      href="tel:+554491438651"
                      className="text-gray-600 hover:text-wood-600 transition-colors"
                    >
                      (44) 9143-8651
                    </a>
                    <br />
                    <a
                      href="tel:+554198736149
1"
                      className="text-gray-600 hover:text-wood-600 transition-colors"
                    >
                      (41) 98736-1491
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-wood-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-wood-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-900 mb-1">Email</h3>
                    <a
                      href="mailto:oliveiras.marcen@gmail.com"
                      className="text-gray-600 hover:text-wood-600 transition-colors break-all"
                    >
                      oliveiras.marcen@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-wood-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-wood-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-900 mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      José Faleiros Maia
                      <br />
                      Paiçandu - PR, 87140-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-wood-100 rounded-lg flex items-center justify-center">
                    <Clock className="text-wood-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-900 mb-1">Área de Atendimento</h3>
                    <p className="text-gray-600">
                      Paiçandu, Maringá, Mandaguaçu, Floresta, Campo Mourão, Marialva e região
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="font-playfair text-2xl font-bold text-wood-900 mb-6">
                  Solicite seu Orçamento Gratuito
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData?.name ?? ""}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData?.email ?? ""}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData?.phone ?? ""}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-all"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData?.subject ?? ""}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-all"
                        placeholder="Ex: Orçamento cozinha planejada"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData?.message ?? ""}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-all resize-none"
                      placeholder="Conte-nos sobre seu projeto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-wood-600 hover:bg-wood-700 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</span>
                    {!isSubmitting && <Send size={20} />}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Ao enviar este formulário, você concorda que suas informações sejam utilizadas
                    para entrarmos em contato.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, Car, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const services = [
  {
    icon: Briefcase,
    title: "Excursiones Privadas",
    description:
      "Para grupos íntimos de amigos o familiares, podemos organizar una de las rutas que ya tenemos o armamos una nueva especial para tu grupo",
    action: "Cotiza Aquí",
    href: "/cotizar/privada",
  },
  {
    icon: Car,
    title: "Excursiones Rally",
    description:
      "Nuestra nueva modalidad de excursiones, donde en vez de irnos en bus lo haremos en vehículos propios en Caravana, con paradas y actividades sorpresas",
    action: "Más Info",
    href: "/excursiones/rally",
  },
  {
    icon: MapPin,
    title: "Armamos Tu Ruta",
    description:
      "¿Quieres hacer un viaje pero necesitas expertos que te lo organicen? Te armamos una ruta basada en tus intereses",
    action: "Cotiza Aquí",
    href: "/cotizar/personalizada",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="w-full bg-gradient-to-b py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-center text-3xl font-bold text-primary md:text-4xl"
          >
            ¿Qué Ofrecemos?
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="pt-6 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="rounded-full bg-primary p-4">
                        <service.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-secondary-foreground">
                      {service.title}
                    </h3>
                    <p className="mb-6">{service.description}</p>
                  </CardContent>
                  <CardFooter className="justify-center pb-6">
                    <Button asChild variant="default">
                      <a href={service.href}>{service.action}</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

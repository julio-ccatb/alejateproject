"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExpandableExcursionesCard } from "./next-tours";

export function FeaturedContent() {
  return (
    <section className="pt-16">
      <div className="max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <Image
                src="/d2.jpg"
                alt="Destinos populares"
                height={256}
                width={600}
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold">Destinos Populares</h3>
                <p className="mb-4 text-gray-600">
                  Descubre los lugares más increíbles y populares para tu
                  próxima aventura. Desde playas paradisíacas hasta montañas
                  imponentes, tenemos el destino perfecto para ti.
                </p>
                <Button>Ver Destinos</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="mb-8 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Próximas Salidas
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ExpandableExcursionesCard />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

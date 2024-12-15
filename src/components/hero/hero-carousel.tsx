"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const images = ["/d1.jpg", "/d2.jpg", "/d3.jpg", "/d4.jpg"];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPreloaded = useImagePreloader(images);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    if (imagesPreloaded) {
      const timer = setInterval(nextImage, 8000); // Change image every 5 seconds
      return () => clearInterval(timer);
    }
  }, [nextImage, imagesPreloaded]);

  if (!imagesPreloaded) {
    return (
      <div className="flex h-[80vh] min-h-[600px] items-center justify-center">
        <p className="text-2xl font-bold">Cargando imágenes...</p>
      </div>
    );
  }

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={images[currentIndex]!}
            alt={`Imagen de destino ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            priority
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-4xl font-bold md:text-6xl"
        >
          EL QUE SE ALEJA ES EL QUE GOZA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 max-w-2xl text-lg md:text-xl"
        >
          Desde playas paradisíacas hasta montañas imponentes, tenemos la
          aventura perfecta para ti.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="text-2xl font-bold">
            ¡COMIENZA TU VIAJE! <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

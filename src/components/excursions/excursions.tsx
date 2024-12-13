"use client";
import { DirectionAwareHover } from "@/components/direction-aware-hover";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Clock, Eye, MapPin, Star } from "lucide-react";
import { Badge } from "../ui/badge";
export const Excursions = () => {
  const items = [
    {
      name: "Camping Cayo Tuna e Isla Cabra",
      price: 5950,
      image: "/d1.jpg",
      location: "Samaná, República Dominicana",
      duration: "2 días, 1 noche",
      rating: 4.9,
      reviewCount: 32,
      category: "Aventura",
    },
    {
      name: "Camping Playa Ermitaño",
      price: 5750,
      image: "/d2.jpg",
      location: "Samaná, República Dominicana",
      duration: "2 días, 1 noche",
      rating: 4.8,
      reviewCount: 28,
      category: "Playa",
    },
    {
      name: "Escalada Frontón",
      price: 3950,
      image: "/d3.jpg",
      location: "Las Galeras, Samaná",
      duration: "1 día",
      rating: 4.7,
      reviewCount: 45,
      category: "Deportes",
    },
    {
      name: "Súper Frontón",
      price: 6750,
      image: "/d4.jpg",
      location: "Las Galeras, Samaná",
      duration: "2 días, 1 noche",
      rating: 4.9,
      reviewCount: 37,
      category: "Aventura",
    },
    {
      name: "Súper Camnping",
      price: 6750,
      image: "/d2.jpg",
      location: "Las Galeras, Samaná",
      duration: "1 días, 1 noche",
      rating: 4.9,
      reviewCount: 37,
      category: "Camping",
    },
  ];
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          Excursiones Abiertas
        </motion.h2>
        <motion.div className="max-w-fit">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Card
                key={item.name}
                className="flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <DirectionAwareHover imageUrl={item.image}>
                    <div className="space-y-2">
                      <p className="text-xl font-bold">{item.name}</p>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                  </DirectionAwareHover>
                </div>

                <CardContent className="flex-grow space-y-4 p-4">
                  <div className="space-y-2">
                    <h3 className="line-clamp-1 text-xl font-bold">
                      {item.name}
                    </h3>

                    <div className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>

                    <div className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{item.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {item.rating.toFixed(1)}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        ({item.reviewCount} reseñas)
                      </span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between p-4 pt-0">
                  <p className="text-primary text-lg font-semibold">
                    {item.price.toLocaleString("es-DO")} DOP
                  </p>
                  <Button className="gap-2">
                    <Eye className="h-4 w-4" />
                    Ver detalles
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Excursions;

import { useState, useEffect } from "react";

export function useImagePreloader(imageSources: string[]) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = imageSources.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesPreloaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        setImagesPreloaded(true); // Set to true even on error to allow the component to render
      }
    };

    void preloadImages();
  }, [imageSources]);

  return imagesPreloaded;
}

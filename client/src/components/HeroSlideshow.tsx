import { useEffect, useState } from "react";

interface HeroSlideshowProps {
  images: string[];
  alt: string;
  interval?: number;
}

export default function HeroSlideshow({ images, alt, interval = 5000 }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="hero__slideshow">
      {images.map((src, index) => (
        <img
          key={src}
          className="hero__image"
          src={src}
          alt={index === activeIndex ? alt : ""}
          aria-hidden={index === activeIndex ? undefined : true}
          style={{ opacity: index === activeIndex ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

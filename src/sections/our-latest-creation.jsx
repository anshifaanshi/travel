import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionData = [
    {
      title: "Luxury Getaways",
      description:
        "Discover handpicked luxury destinations designed for comfort, elegance, and unforgettable experiences.",
      image: "https://i.postimg.cc/RV84Bsn6/Viaje-de-Graca-com-Milhas.jpg",
      align: "object-center",
    },
    {
      title: "Adventure Tours",
      description:
        "Explore thrilling adventures across breathtaking landscapes, perfect for travelers who seek excitement.",
      image:
        "https://i.postimg.cc/HWhfcJsn/Australian-Women-Share-What-s-Surprised-Them-Most-About-Traveling-in-America.jpg",
      align: "object-right",
    },
    {
      title: "International Travel",
      description:
        "Travel the world with ease through expertly planned international trips and seamless itineraries.",
      image:
        "https://i.postimg.cc/6qygbKz3/Download-Portrait-beautiful-young-asian-woman-travel-and-leisure-with-luggage-bag-and-passport-for-f.jpg",
      align: "object-center",
    },
  ];

  // Auto slide (pause on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sectionData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="flex flex-col items-center" id="creations">
      <SectionTitle
        title="Explore Our Travel Experiences"
        description="Carefully curated journeys crafted to inspire, relax, and create lifelong memories."
      />

      <div
        className="flex items-center gap-4 h-[400px] w-full max-w-5xl mt-18 mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {sectionData.map((data, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={data.title}
              className={`relative group h-full overflow-hidden rounded-xl transition-all duration-500 
                ${isHovered ? "hover:w-full w-56" : isActive ? "w-full" : "w-56"}`}
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 320,
                damping: 70,
              }}
            >
              <img
                src={data.image}
                alt={data.title}
                className={`h-full w-full object-cover ${data.align}`}
              />

              <div
                className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 
                  transition-opacity duration-300
                  ${
                    isHovered
                      ? "opacity-0 group-hover:opacity-100"
                      : isActive
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
              >
                <h1 className="text-3xl font-semibold">{data.title}</h1>
                <p className="text-sm mt-2">{data.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

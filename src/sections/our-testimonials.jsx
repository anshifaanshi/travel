import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
  const testimonials = [
    {
      quote:
        "Our trip was perfectly organized from start to finish. The experience was smooth, relaxing, and unforgettable.",
      name: "Richard Nelson",
      role: "International Traveler",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      quote:
        "Beautiful destinations, great planning, and excellent support throughout the journey. Highly recommended!",
      name: "Sophia Martinez",
      role: "Luxury Travel Enthusiast",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      quote:
        "Everything was well-arranged — hotels, transport, and activities. It made traveling stress-free.",
      name: "Ethan Roberts",
      role: "Adventure Explorer",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "The destinations were breathtaking, and the itinerary was thoughtfully curated. Truly memorable!",
      name: "Isabella Kim",
      role: "Solo Traveler",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "This was one of the best travel experiences I’ve ever had. Everything exceeded my expectations.",
      name: "Liam Johnson",
      role: "Family Vacationer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      quote:
        "From booking to return, the journey was seamless. I can’t wait to plan my next trip with them!",
      name: "Ava Patel",
      role: "Frequent Flyer",
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center" id="testimonials">
      <SectionTitle
        title="What Our Travelers Say"
        description="Real experiences from travelers who explored the world with us."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="group border border-slate-800 p-6 rounded-xl"
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
            <p className="text-slate-100 text-base">
              {testimonial.quote}
            </p>

            <div className="flex items-center gap-3 mt-8 group-hover:-translate-y-1 duration-300">
              <img
                className="size-10 rounded-full"
                src={testimonial.image}
                alt="traveler"
              />
              <div>
                <h2 className="text-gray-200 font-medium">
                  {testimonial.name}
                </h2>
                <p className="text-indigo-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

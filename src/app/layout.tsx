"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

//  Importing images from src/assets
import food1 from "@/assets/food1.jpg";
import food2 from "@/assets/food2.jpg";
import food3 from "@/assets/food3.jpg";

interface Food {
  src: StaticImageData;
  title: string;
  review: string;
}

export default function Home() {
  const foods: Food[] = [
    {
      src: food1,
      title: "Sicilias Bistro NIBM",
      review:
        "Absolutely loved the creamy pasta and wood-fired pizza! The ambiance is cozy, and the food has that authentic Italian touch 🍝✨",
    },
    {
      src: food2,
      title: "Bhadait Pune",
      review:
        "Perfect spot for spice lovers! The tandoori wings were mind-blowing — smoky, juicy, and full of desi masala 🔥🍗",
    },
    {
      src: food3,
      title: "Cafe Ekaant",
      review:
        "A peaceful café with beautiful aesthetics and soulful food. The coffee was rich, and desserts were just heavenly ☕🍰",
    },
  ];

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-tr from-yellow-100 via-orange-50 to-rose-100 p-8">
      
      {/* Floating Animated Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-200 opacity-40 blur-2xl"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🍴 Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-orange-700 mb-4 drop-shadow-lg"
      >
        Soukhya’s Food Blog 
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-gray-700 mb-10"
      >
       
      </motion.p>

      {/*  Food Image Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 z-10">
        {foods.map((food, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center bg-white bg-opacity-70 rounded-2xl p-4 shadow-xl backdrop-blur-md transition-all"
          >
            <Image
              src={food.src}
              alt={food.title}
              width={300}
              height={200}
              className="rounded-xl shadow-md"
            />
            <p className="mt-3 text-gray-800 font-semibold">{food.title}</p>
            <p className="text-sm text-gray-600 mt-2 italic">{food.review}</p>
          </motion.div>
        ))}
      </div>

      {/* 🌿 Footer */}
      <p className="mt-10 text-sm text-gray-600 z-10">
        Made using Next.js + Tailwind + Framer Motion
      </p>
    </main>
  );

}



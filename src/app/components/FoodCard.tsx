"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";



interface Food {
  src: string | StaticImageData;
  title: string;
  review: string;
}


interface Props {
  food: Food;
}

export default function FoodCard({ food }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex flex-col items-center bg-white bg-opacity-80 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md cursor-pointer"
    >
      <Image
        src={food.src}
        alt={food.title}
        width={300}
        height={200}
        className="rounded-xl"
      />

      {/* Slide-up overlay on hover */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-4"
      >
        <p className="text-white font-semibold text-lg">{food.title}</p>
        <p className="text-white text-sm mt-1 italic">{food.review}</p>
      </motion.div>
    </motion.div>
  );
}

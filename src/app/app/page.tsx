"use client";
import { motion } from "framer-motion";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import FoodCard from "../components/FoodCard";


export default function Home() {
  const foods = [
    {
      src: food1,
      title: "Sicilias Bistro NIBM",
      review: "One of the best pizzas I’ve had! Cozy ambiance and great cheese pull.",
    },
    {
      src: food2,
      title: "Bhadait Pune",
      review: "Perfect for spicy food lovers! Their wings hit the right notes every time.",
    },
    {
      src: food3,
      title: "Cafe Ekaant",
      review: "Peaceful spot with hearty food — loved the fries and coffee combo.",
    },
  ];

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-100 to-yellow-50 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-amber-800 mb-4 drop-shadow-lg"
      >
        Soukhya’s Food Blog
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-gray-700 mb-10"
      >
        Spicy, crispy, and flavor-packed — straight from my kitchen!
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 z-10">
        {foods.map((food, i) => (
          <FoodCard key={i} food={food} />
        ))}
      </div>
    </main>
  );
}

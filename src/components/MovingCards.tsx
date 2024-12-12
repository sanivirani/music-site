"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const movingCrads = [
  {
    quote: "Stay hungry, stay foolish.",
    name: "Steve Jobs",
    title: "Co-founder of Apple Inc.",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    name: "Steve Jobs",
    title: "Co-founder of Apple Inc.",
  },

  {
    quote: "Simplicity is the ultimate sophistication.",
    name: "Leonardo da Vinci",
    title: "Artist and Inventor",
  },
  {
    quote: "Quality is not an act, it is a habit.",
    name: "Aristotle",
    title: "Greek Philosopher",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    name: "Confucius",
    title: "Chinese Philosopher",
  },
];

function MovingCards() {
  return (
    <div className="h-[25rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Inspiration: Lagacy of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-8xl ">
          <InfiniteMovingCards
            items={movingCrads}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MovingCards;

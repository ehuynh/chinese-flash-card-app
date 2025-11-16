import React from 'react';
import type { Flashcard } from '../../models/flashcard';

interface FlashcardCarouselProps {
  flashcards: Flashcard[];
}

export default function FlashcardCarousel({ flashcards }: FlashcardCarouselProps) {
  if (!flashcards || flashcards.length === 0) {
    return <p>No flashcards found.</p>;
  }
  return (
    <div className="relative">
      <div
        className="flex gap-4 overflow-x-auto scrollbar-hide px-2 py-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {flashcards.map((card: Flashcard) => (
          <div
            key={card.id}
            className="min-w-[200px] max-w-xs border rounded-lg p-4 bg-neutral-100 dark:bg-neutral-900 shadow flex flex-col gap-2"
            style={{ scrollSnapAlign: 'start' }}
          >
            <span className="text-xl font-semibold">{card.characters}</span>
            <span className="text-neutral-500">{card.pinyin}</span>
            <span className="text-neutral-700">{card.meaning}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

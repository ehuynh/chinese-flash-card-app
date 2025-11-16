import React from 'react';
import type { Flashcard } from '../../models/flashcard';

import FlashcardPreviewCard from './FlashcardPreviewCard';

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
          <FlashcardPreviewCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

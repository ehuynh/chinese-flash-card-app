import React from 'react';
import Link from 'next/link';
import type { Flashcard } from '../../models/flashcard';

interface FlashcardPreviewCardProps {
  card: Flashcard;
}

export default function FlashcardPreviewCard({ card }: FlashcardPreviewCardProps) {
  return (
    <Link href={`/flashcard/${card.id ?? ''}`}
      className="min-w-[200px] max-w-xs border rounded-lg p-4 bg-neutral-100 dark:bg-neutral-900 shadow flex flex-col gap-2 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
      style={{ scrollSnapAlign: 'start' }}
    >
      <span className="text-xl font-semibold">{card.characters}</span>
      <span className="text-neutral-500">{card.pinyin}</span>
      <span className="text-neutral-700">{card.meaning}</span>
    </Link>
  );
}

import React from 'react';
import type { Collection } from '../../models/collection';

interface CollectionCarouselProps {
  collections: Collection[];
}

export default function CollectionCarousel({ collections }: CollectionCarouselProps) {
  if (!collections || collections.length === 0) {
    return <p>No collections found.</p>;
  }
  return (
    <div className="relative">
      <div
        className="flex gap-4 overflow-x-auto scrollbar-hide px-2 py-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {collections.map((col: Collection) => (
          <div
            key={col.id}
            className="min-w-[200px] max-w-xs border rounded-lg p-4 bg-neutral-50 dark:bg-neutral-900 shadow flex flex-col gap-2"
            style={{ scrollSnapAlign: 'start' }}
          >
            <span className="text-lg font-semibold">{col.name}</span>
            <span className="text-neutral-500 text-sm">{col.description}</span>
            <span className="text-neutral-400 text-xs">Created: {col.created_at ? new Date(col.created_at).toLocaleDateString() : ''}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

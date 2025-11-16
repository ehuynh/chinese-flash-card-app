import { createClient as createServerClient } from '../../utils/supabase/server';
import type { Flashcard } from '../../models/flashcard';
import React from 'react';
import FlashcardCarousel from './FlashcardCarousel';

export default async function DashboardPage() {
  const supabase = await createServerClient();
  // Get the authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;
  const { data, error } = await supabase
    .from('flashcards')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  const flashcards: Flashcard[] = data ?? [];

  // Carousel scroll logic (client only)
  // Use a ref for the carousel container
  // This must be a client component for scroll controls, so fallback to just horizontal scroll for SSR

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h1>
      <p className="text-base text-neutral-500 mb-8">You are now logged in. Start learning Chinese flash cards!</p>
      <div className="w-full max-w-2xl">
        <h2 className="text-lg font-bold mb-2">Recently Added Flashcards</h2>
        <div className="mb-2 text-xs text-neutral-400">User ID: {userId ?? 'none'}</div>
        {error ? (
          <p className="text-red-500">Error loading flashcards.</p>
        ) : (
          <FlashcardCarousel flashcards={flashcards} />
        )}
      </div>
    </main>
  );
}

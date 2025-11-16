import { createClient as createServerClient } from '../../utils/supabase/server';
import type { Flashcard } from '../../models/flashcard';
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
    .eq('user_id', userId);
  const flashcards: Flashcard[] = data ?? [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h1>
      <p className="text-base text-neutral-500 mb-8">You are now logged in. Start learning Chinese flash cards!</p>
      <div className="w-full max-w-md">
        <h2 className="text-lg font-bold mb-2">Your Flashcards</h2>
        <div className="mb-2 text-xs text-neutral-400">User ID: {userId ?? 'none'}</div>
        {error ? (
          <p className="text-red-500">Error loading flashcards.</p>
        ) : flashcards.length === 0 ? (
          <p>No flashcards found.</p>
        ) : (
          <ul className="space-y-4">
            {flashcards.map((card: Flashcard) => (
              <li key={card.id} className="border rounded p-3 bg-neutral-100 dark:bg-neutral-900">
                <div className="font-semibold text-xl">{card.characters}</div>
                <div className="text-neutral-500">{card.pinyin}</div>
                <div className="text-neutral-700">{card.meaning}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

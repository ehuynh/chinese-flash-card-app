
import React from 'react';
import { createClient as createServerClient } from '../../../utils/supabase/server';

export default async function FlashcardPage({ params }: { params: { id: string } }) {
  const supabase = await createServerClient();
  const resolvedParams = await params;
  const { data: flashcard, error } = await supabase
    .from('flashcards')
    .select('*')
    .eq('id', resolvedParams.id)
    .single();

  if (error || !flashcard) {
    return (
      <main className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-2">Flashcard Not Found</h1>
        <p className="text-red-500">Unable to load flashcard details.</p>
      </main>
    );
  }

  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Flashcard Details</h1>
      <div className="mb-4">
        <div className="text-lg font-semibold">Characters:</div>
        <div className="text-xl mb-1">{flashcard.characters}</div>
        <div className="text-gray-500 mb-1">Pinyin: {flashcard.pinyin}</div>
        <div className="mb-1">Meaning: {flashcard.meaning}</div>
        <div className="mb-1">Tags: {flashcard.tags?.join(', ')}</div>
        <div className="mb-1 text-xs text-gray-400">Created: {flashcard.created_at}</div>
        <div className="mb-1 text-xs text-gray-400">Updated: {flashcard.updated_at}</div>
      </div>
      <div>
        <div className="font-semibold mb-2">Example Usages:</div>
        {Array.isArray(flashcard.examples) && flashcard.examples.length > 0 ? (
          flashcard.examples.map((ex: { sentence: string; pinyin: string; translation: string }, idx: number) => (
            <div key={idx} className="mb-2 p-2 border rounded">
              <div className="mb-1">{ex.sentence}</div>
              <div className="text-gray-500 mb-1">{ex.pinyin}</div>
              <div className="text-sm text-gray-600">{ex.translation}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-400">No examples available.</div>
        )}
      </div>
    </main>
  );
}

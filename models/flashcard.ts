// Flashcard and ExampleUsage types for Yika (忆卡)

export interface ExampleUsage {
  sentence: string; // Example sentence in Chinese
  pinyin: string;   // Pinyin for the sentence
  translation: string; // English translation
}

export interface Flashcard {
  id?: string; // Supabase-generated UUID
  user_id?: string; // For multi-user support
  characters: string; // The Chinese characters or word
  pinyin: string; // The pronunciation
  meaning: string; // The English meaning
  tags: string[]; // Array of tags (e.g., ["HSK1", "food"])
  examples: ExampleUsage[]; // Array of example usages
  created_at?: string; // Supabase timestamp
}

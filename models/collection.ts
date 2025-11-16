// Collection model for flashcard collections
export interface Collection {
  id: string; // UUID
  name: string;
  description?: string;
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
}
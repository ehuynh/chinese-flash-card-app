// Collection model for flashcard collections
export interface Collection {
  id: string; // UUID
  user_id: string; // UUID of the owner
  name: string;
  description?: string;
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
}
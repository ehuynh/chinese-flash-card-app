-- Migration: Create collections table and update flashcards for collections

CREATE TABLE IF NOT EXISTS collections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT collections_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- 2. Add collection_id to flashcards (nullable for backward compatibility)
ALTER TABLE flashcards ADD COLUMN IF NOT EXISTS collection_id UUID;

-- 3. Add foreign key constraint
ALTER TABLE flashcards
    ADD CONSTRAINT flashcards_collection_id_fkey
    FOREIGN KEY (collection_id)
    REFERENCES collections(id)
    ON DELETE SET NULL;

CREATE TABLE IF NOT EXISTS flashcards (
	id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
	characters text NOT NULL,
	pinyin text NOT NULL,
	meaning text NOT NULL,
	tags text[] NOT NULL DEFAULT '{}',
	examples jsonb NOT NULL DEFAULT '[]',
	created_at timestamptz NOT NULL DEFAULT now(),
	updated_at timestamptz NOT NULL DEFAULT now()
);

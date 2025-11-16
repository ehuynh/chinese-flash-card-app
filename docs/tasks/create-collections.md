User's active file:

# Flashcard Collections Implementation Plan


## 1. Data Model Design

- [ ] Create a new `Collection` model with fields:
	- [ ] `id` (UUID, primary key)
	- [ ] `name` (string, required)
	- [ ] `description` (string, optional)
	- [ ] `created_at` (timestamp)
	- [ ] `updated_at` (timestamp)
- [ ] Update the `Flashcard` model to include:
	- [ ] `collection_id` (UUID, foreign key to `Collection.id`)


## 2. Database Schema Migration

- [ ] Create a new table `collections` with the above fields.
- [ ] Alter the `flashcards` table to add a `collection_id` column (nullable for backward compatibility).
- [ ] Add a foreign key constraint from `flashcards.collection_id` to `collections.id`.


## 3. Test SQL Insertion Query

- [ ] Insert a test collection.
- [ ] Insert a test flashcard linked to that collection.

```sql
-- Create a test collection
INSERT INTO collections (id, name, description, created_at, updated_at)
VALUES (
	gen_random_uuid(),
	'HSK 1 Vocabulary',
	'Basic words for HSK Level 1',
	NOW(),
	NOW()
);

-- Insert a test flashcard into the collection
INSERT INTO flashcards (id, chinese, pinyin, english, collection_id, created_at, updated_at)
VALUES (
	gen_random_uuid(),
	'你好',
	'nǐ hǎo',
	'hello',
	(SELECT id FROM collections WHERE name = 'HSK 1 Vocabulary' LIMIT 1),
	NOW(),
	NOW()
);
```


## 4. Next Steps

- [ ] Implement the Collection model in code (`models/collection.ts`).
- [ ] Update flashcard logic to support collections.
- [ ] (UI work can be planned later.)

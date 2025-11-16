User's active file:

# Flashcard Collections Implementation Plan


## 1. Data Model Design

- [x] Create a new `Collection` model with fields:
	- [x] `id` (UUID, primary key)
	- [x] `name` (string, required)
	- [x] `description` (string, optional)
	- [x] `created_at` (timestamp)
	- [x] `updated_at` (timestamp)
- [x] Update the `Flashcard` model to include:
	- [x] `collection_id` (UUID, foreign key to `Collection.id`)


## 2. Database Schema Migration

- [x] Create a new table `collections` with the above fields.
- [x] Alter the `flashcards` table to add a `collection_id` column (nullable for backward compatibility).
- [x] Add a foreign key constraint from `flashcards.collection_id` to `collections.id`.


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

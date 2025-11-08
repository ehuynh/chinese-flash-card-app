# Plan: Basic Flashcard Implementation

This document outlines the step-by-step plan for implementing the basic flashcard functionality in Yika (忆卡), including Supabase integration and tag-based collections.

## Steps

## Checklist

- [x] **Create a global models or types folder**
   - Create a `models/` directory at the project root for shared TypeScript types/interfaces.

- [x] **Design the Flashcard TypeScript Type**
   - [x] Define a type/interface for flashcards with the following fields:
      - [x] `characters` (string): The Chinese characters or word
      - [x] `pinyin` (string): The pronunciation
      - [x] `meaning` (string): The English meaning
      - [x] `tags` (string[]): Array of tags (e.g., ["HSK1", "food"])
      - [x] `examples` (ExampleUsage[]): Array of example usages, each with:
         - [x] `sentence` (string): Example sentence in Chinese
         - [x] `pinyin` (string): Pinyin for the sentence
         - [x] `translation` (string): English translation
      - [x] `id`, `created_at`, `user_id` (optional, for Supabase)

 [x] **Design the Supabase Table Schema**
    - [x] Create a `flashcards` table with columns:
         - [x] `id`: uuid (primary key)
         - [x] `user_id`: uuid (for multi-user support)
         - [x] `characters`: text
         - [x] `pinyin`: text
         - [x] `meaning`: text
         - [x] `tags`: text[] (array of strings)
         - [x] `examples`: jsonb (array of objects)
         - [x] `created_at`: timestamp with time zone

- [ ] **Implement Supabase Client Logic**
   - [ ] Add functions to create and fetch flashcards from Supabase.
   - [ ] Ensure support for all fields, including tags and example usages.

- [ ] **Build Flashcard Creation UI**
   - [ ] Create a minimal form for users to add new flashcards.
   - [ ] Form fields: characters, pinyin, meaning, tags (multi), example usages (dynamic add/remove).

- [ ] **Connect Form to Supabase**
   - [ ] On form submission, save the new flashcard to Supabase.
   - [ ] Handle loading and error states.

- [ ] **Test Flashcard Creation and Retrieval**
   - [ ] Create test flashcards and verify they are stored and retrieved correctly.
   - [ ] Ensure all fields, including nested example usages, work as expected.

---

This plan enables a minimal, tag-based flashcard system with Supabase integration, ready for further extension (e.g., review modes, search, etc.).

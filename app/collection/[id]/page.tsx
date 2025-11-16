import { createClient as createServerClient } from "../../../utils/supabase/server";
import type { Flashcard } from "../../../models/flashcard";
import FlashcardCarousel from "../../components/FlashcardCarousel";

interface Props {
  params: { id: string };
}

export default async function CollectionPage({ params }: Props) {
  const resolvedParams = await params;
  const collectionId = resolvedParams.id;
  const supabase = await createServerClient();
  // Fetch collection info
  const { data: collectionData } = await supabase
    .from("collections")
    .select("name")
    .eq("id", collectionId)
    .single();
  const collectionName = collectionData?.name ?? "Collection";
  // Fetch flashcards in this collection
  const { data: flashcardData } = await supabase
    .from("flashcards")
    .select("*")
    .eq("collection_id", collectionId)
    .order("created_at", { ascending: false });
  const flashcards: Flashcard[] = flashcardData ?? [];

  return (
    <main className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{collectionName}</h1>
        <FlashcardCarousel flashcards={flashcards} />
      </div>
    </main>
  );
}

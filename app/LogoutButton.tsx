"use client";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded text-gray-700 font-medium border border-gray-300 hover:bg-gray-100 transition"
    >
      Logout
    </button>
  );
}

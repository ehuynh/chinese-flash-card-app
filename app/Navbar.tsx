
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import LogoutButton from "./LogoutButton";


export default async function Navbar() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm">
      <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
        Yika <span className="text-base text-gray-400">(忆卡)</span>
      </Link>
      <div className="flex gap-2 items-center">
        {!user ? (
          <>
            <Link href="/login" className="px-4 py-2 rounded text-gray-700 font-medium hover:bg-gray-100 transition border border-gray-300">Login</Link>
            <Link href="/signup" className="px-4 py-2 rounded text-white bg-gray-900 hover:bg-gray-700 font-medium transition border border-gray-900">Sign up</Link>
          </>
        ) : (
          <>
            <span className="text-gray-700 font-medium mr-2">HI {user.email}</span>
            <LogoutButton />
          </>
        )}
      </div>
    </nav>
  );
}

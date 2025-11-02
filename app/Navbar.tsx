"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClientComponentClient, User } from '@supabase/auth-helpers-nextjs';

export default function Navbar() {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let ignore = false;
    supabase.auth.getUser().then(({ data }) => {
      if (!ignore) setUser(data.user);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      ignore = true;
      listener?.subscription.unsubscribe();
    };
  }, [supabase]);

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
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                window.location.reload();
              }}
              className="px-4 py-2 rounded text-gray-700 font-medium hover:bg-gray-100 transition border border-gray-300"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

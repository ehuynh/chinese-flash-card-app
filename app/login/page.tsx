"use client";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';

export default function LoginPage() {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-start bg-gray-50 p-4 min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-xs bg-white rounded-lg shadow p-6 flex flex-col gap-4 mt-12">
        <h1 className="text-2xl font-bold text-center mb-2">Sign in to Yika</h1>
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-60 border border-gray-900"
        >
          {loading ? 'Signing in…' : 'Sign in with Google'}
        </button>
        {error && <div className="text-gray-700 text-sm text-center">{error}</div>}
      </div>
    </div>
  );
}

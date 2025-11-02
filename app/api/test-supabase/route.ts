import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/utils/supabase/server';

// Simple API route to test Supabase client initialization
export async function GET() {
  try {
    const supabase = await createSupabaseServerClient();
    // Try a simple call: get current session (should always succeed, even if null)
    const { data, error } = await supabase.auth.getSession();
    return NextResponse.json({
      ok: true,
      session: data.session,
      error: error?.message || null,
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

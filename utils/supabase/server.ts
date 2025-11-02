import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// This utility creates a Supabase client for SSR using environment variables and Next.js cookies
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          // Not implemented: SSR cookies are set via Next.js response, handled in route handlers
        },
        remove(name: string, options: any) {
          // Not implemented: SSR cookies are removed via Next.js response, handled in route handlers
        },
      },
    }
  );
}

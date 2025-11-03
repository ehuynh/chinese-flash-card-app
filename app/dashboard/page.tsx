import React from 'react';

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h1>
      <p className="text-base text-neutral-500 mb-8">You are now logged in. Start learning Chinese flash cards!</p>
      {/* Add dashboard content here */}
    </main>
  );
}

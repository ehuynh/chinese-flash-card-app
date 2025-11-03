
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="flex flex-col items-center justify-center w-full min-h-[60vh]">
          <span className="text-8xl">🀄️</span>
        </section>
        {/* Example of scrollable paged content */}
        <section className="w-full max-w-md mx-auto py-8">
          <div className="mb-6 border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">Welcome to Yika</h2>
            <p className="text-gray-600">A modern, minimal flash card app for Chinese learners.</p>
          </div>
          <div className="mb-6 border-b pb-4">
            <h3 className="text-lg font-medium mb-1">🀄️ Minimal. Mobile-first.</h3>
            <p className="text-gray-600">Login or Signup to get started.</p>
          </div>
        </section>
      </main>
      <footer className="p-4 border-t text-center text-xs text-gray-500">
        &copy; 2025 Yika (忆卡)
      </footer>
    </div>
  );
}

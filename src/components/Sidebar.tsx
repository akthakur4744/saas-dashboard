import Link from 'next/link';

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <aside className="w-56 md:w-64 bg-white dark:bg-gray-800 shadow-md h-full min-h-screen p-4 flex flex-col">
      <div className="mb-8">
        <span className="text-xl font-bold text-gray-900 dark:text-white">SaaS Dashboard</span>
      </div>
      <nav className="flex flex-col gap-4 flex-1">
        <Link href="/dashboard" className="text-gray-700 dark:text-gray-200 hover:underline">Dashboard</Link>
        <Link href="/projects" className="text-gray-700 dark:text-gray-200 hover:underline">Projects</Link>
      </nav>
      <div className="mt-auto text-xs text-gray-400 dark:text-gray-500">© {new Date().getFullYear()} SaaS Inc.</div>
    </aside>
  );
}

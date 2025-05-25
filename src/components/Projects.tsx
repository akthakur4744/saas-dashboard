import useSWR from 'swr';
import { useState } from 'react';

const fetcher = (url: string, token: string) =>
  fetch(url, { headers: { Authorization: `Bearer ${token}` } }).then((r) => r.json());

export default function Projects() {
  const [token, setToken] = useState(''); // Replace with real auth token from context or cookie
  const { data, mutate } = useSWR(token ? ['/api/projects', token] : null, ([url, t]) => fetcher(url, t));
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name, description: desc }),
    });
    setName('');
    setDesc('');
    mutate();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
      <form className="flex gap-2 mb-4" onSubmit={handleCreate}>
        <input
          className="border rounded px-2 py-1 flex-1 dark:bg-gray-700 dark:text-white"
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border rounded px-2 py-1 flex-1 dark:bg-gray-700 dark:text-white"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="bg-indigo-600 text-white px-4 py-1 rounded" type="submit">
          Add
        </button>
      </form>
      <ul>
        {data?.projects?.map((p: any) => (
          <li key={p._id} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-900 dark:text-white">{p.name}</span>
            {/* Add edit/delete buttons here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

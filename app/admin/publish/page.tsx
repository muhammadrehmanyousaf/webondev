"use client";
import React, { useState } from 'react';

export default function PublishAdminPage() {
  const [title, setTitle] = useState("");
  const [canonicalPath, setCanonicalPath] = useState("");
  const [bodyMarkdown, setBodyMarkdown] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/publish/syndicate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          canonicalPath,
          bodyMarkdown,
          tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
          evergreen: { feed: 'services', format: 'json', limit: 100 }
        })
      });
      const json = await res.json();
      setResult(json);
    } catch (e: any) {
      setResult({ ok: false, error: e?.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Syndicate & Schedule</h1>
      <form onSubmit={submit} className="space-y-4">
        <input className="w-full border p-2 rounded" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="w-full border p-2 rounded" placeholder="Canonical Path (e.g. /blog/my-post)" value={canonicalPath} onChange={(e) => setCanonicalPath(e.target.value)} />
        <input className="w-full border p-2 rounded" placeholder="Tags (comma-separated)" value={tags} onChange={(e) => setTags(e.target.value)} />
        <textarea className="w-full border p-2 rounded h-56" placeholder="Body Markdown" value={bodyMarkdown} onChange={(e) => setBodyMarkdown(e.target.value)} />
        <button disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">{loading ? 'Publishing...' : 'Publish to All & Schedule'}</button>
      </form>
      {result && (
        <pre className="mt-6 whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded border">{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}



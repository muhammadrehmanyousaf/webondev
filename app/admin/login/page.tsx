"use client";
import React, { useState } from 'react';

export default function AdminLoginPage() {
  const [token, setToken] = useState("");
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const res = await fetch('/api/admin/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    });
    if (res.ok) {
      location.href = '/admin/tools';
    } else {
      const t = await res.text();
      setError(t || 'Invalid token');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={submit} className="space-y-4">
        <input className="w-full border p-2 rounded" placeholder="Admin Token" value={token} onChange={(e) => setToken(e.target.value)} />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </form>
    </div>
  );
}



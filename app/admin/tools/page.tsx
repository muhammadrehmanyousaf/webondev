"use client";
import React, { useState } from 'react';

async function callApi(path: string, method: string, token: string, body?: any) {
  const res = await fetch(path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'x-admin-token': token } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  try { return { status: res.status, json: JSON.parse(text) }; } catch { return { status: res.status, text }; }
}

export default function AdminToolsPage() {
  const [token, setToken] = useState("");
  const [log, setLog] = useState<string>("");
  const [pinterestCode, setPinterestCode] = useState("");
  const [pinterestAccessToken, setPinterestAccessToken] = useState("");

  const append = (label: string, data: any) => setLog((l) => l + `\n\n=== ${label} ===\n` + JSON.stringify(data, null, 2));

  const publishWebSub = async () => {
    const res = await callApi('/api/websub/publish', 'POST', token);
    append('WebSub', res);
  };

  const scheduleEvergreen = async () => {
    const res = await callApi('/api/schedule/evergreen', 'POST', token, { feed: 'services', format: 'json', limit: 200 });
    append('Evergreen', res);
  };

  const submitIndexers = async () => {
    const urls = [`${location.origin}/`, `${location.origin}/services`, `${location.origin}/portfolio`];
    const a = await callApi('/api/indexer/indexmenow', 'POST', token, { urls });
    append('IndexMeNow', a);
    const b = await callApi('/api/indexer/linkcentaur', 'POST', token, { urls });
    append('LinkCentaur', b);
    const c = await callApi('/api/indexer/instantlinkindexer', 'POST', token, { urls });
    append('InstantLinkIndexer', c);
  };

  const uploadPinterest = async () => {
    const imageUrl = `${location.origin}/api/images/watermark?text=Solutions%20Indicator`;
    const res = await callApi('/api/images/upload/pinterest', 'POST', token, { imageUrl });
    append('Pinterest', res);
  };

  const getPinterestAuthorizeUrl = async () => {
    const res = await callApi('/api/auth/pinterest/authorize', 'GET', token);
    append('Pinterest Authorize URL', res);
    if (res?.json?.url) {
      try { navigator.clipboard.writeText(res.json.url); } catch {}
      alert('Authorization URL copied to clipboard. Open it, authorize, then paste the code below.');
    }
  };

  const exchangePinterestCode = async () => {
    const res = await callApi('/api/auth/pinterest/token', 'POST', token, { code: pinterestCode });
    append('Pinterest Token Exchange', res);
    if (res?.json?.data?.access_token) setPinterestAccessToken(res.json.data.access_token);
  };

  const listPinterestBoards = async () => {
    const res = await callApi('/api/pinterest/boards', 'GET', token);
    append('Pinterest Boards', res);
  };

  const uploadImgur = async () => {
    // Small white PNG placeholder in base64
    const imageBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NgYGD4DwABHgEDk1Jb1wAAAABJRU5ErkJggg==';
    const res = await callApi('/api/images/upload/imgur', 'POST', token, { imageBase64, title: 'Test' });
    append('Imgur', res);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Tools</h1>
      <input className="w-full border p-2 rounded" placeholder="ADMIN_API_TOKEN" value={token} onChange={(e) => setToken(e.target.value)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <button onClick={publishWebSub} className="px-4 py-2 bg-blue-600 text-white rounded">Publish WebSub</button>
        <button onClick={scheduleEvergreen} className="px-4 py-2 bg-indigo-600 text-white rounded">Schedule Evergreen</button>
        <button onClick={submitIndexers} className="px-4 py-2 bg-emerald-600 text-white rounded">Submit Indexers</button>
        <button onClick={getPinterestAuthorizeUrl} className="px-4 py-2 bg-pink-600 text-white rounded">Pinterest: Get Auth URL</button>
        <div className="space-y-2">
          <input className="w-full border p-2 rounded" placeholder="Paste Pinterest ?code here" value={pinterestCode} onChange={(e) => setPinterestCode(e.target.value)} />
          <div className="grid grid-cols-2 gap-2">
            <button onClick={exchangePinterestCode} className="px-4 py-2 bg-pink-700 text-white rounded">Exchange Code</button>
            <button onClick={listPinterestBoards} className="px-4 py-2 bg-pink-800 text-white rounded">List Boards</button>
          </div>
          {pinterestAccessToken && <div className="text-xs break-all">Access Token: {pinterestAccessToken}</div>}
        </div>
        <button onClick={uploadPinterest} className="px-4 py-2 bg-pink-600 text-white rounded">Pinterest: Upload Test Pin</button>
        <button onClick={uploadImgur} className="px-4 py-2 bg-gray-700 text-white rounded">Upload to Imgur</button>
      </div>
      <pre className="mt-6 whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded border min-h-[200px]">{log}</pre>
    </div>
  );
}



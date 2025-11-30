import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code') || ''
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>OAuth Code</title></head><body style="font-family:system-ui;padding:24px"><h1>OAuth Code</h1><p>Copy this code and send it back to complete token exchange:</p><pre style="background:#f6f8fa;padding:12px;border-radius:6px">${code}</pre></body></html>`
  return new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
}



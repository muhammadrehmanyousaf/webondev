import { NextRequest, NextResponse } from 'next/server'
import { ensureAdminToken } from '@/app/api/_utils/auth'

export async function GET(req: NextRequest) {
  const gate = ensureAdminToken(req)
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: 401 })

  const token = process.env.PINTEREST_ACCESS_TOKEN
  if (!token) return NextResponse.json({ error: 'PINTEREST_ACCESS_TOKEN not set' }, { status: 500 })

  const res = await fetch('https://api.pinterest.com/v5/boards', {
    headers: { Authorization: `Bearer ${token}` }
  })
  const json = await res.json().catch(() => ({}))
  return NextResponse.json({ ok: res.ok, status: res.status, data: json })
}



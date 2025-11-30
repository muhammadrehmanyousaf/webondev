import { NextRequest, NextResponse } from 'next/server'
import { ensureAdminToken } from '@/app/api/_utils/auth'
import { getBaseUrl } from '@/lib/site-config'

export async function POST(req: NextRequest) {
  const gate = ensureAdminToken(req)
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: 401 })

  const body = await req.json().catch(() => null)
  const appId = (process.env.PINTEREST_APP_ID || body?.appId) as string | undefined
  const appSecret = (process.env.PINTEREST_APP_SECRET || body?.appSecret) as string | undefined
  if (!appId || !appSecret) return NextResponse.json({ error: 'PINTEREST_APP_ID or PINTEREST_APP_SECRET not set' }, { status: 500 })

  const code = body?.code as string | undefined
  if (!code) return NextResponse.json({ error: 'code required' }, { status: 400 })

  const redirectUri = `${getBaseUrl()}/api/auth/callback`

  const form = new URLSearchParams()
  form.set('grant_type', 'authorization_code')
  form.set('code', code)
  form.set('redirect_uri', redirectUri)

  const res = await fetch('https://api.pinterest.com/v5/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form,
    // Basic auth with app id and secret
    // @ts-ignore - node fetch supports this header
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + Buffer.from(`${appId}:${appSecret}`).toString('base64') }
  })

  const json = await res.json().catch(() => ({}))
  return NextResponse.json({ ok: res.ok, status: res.status, data: json })
}



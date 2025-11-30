import { NextRequest, NextResponse } from 'next/server'
import { ensureAdminToken } from '@/app/api/_utils/auth'
import { getBaseUrl } from '@/lib/site-config'

function encode(value: string): string {
  return encodeURIComponent(value)
}

export async function GET(req: NextRequest) {
  const gate = ensureAdminToken(req)
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: 401 })

  let appId = process.env.PINTEREST_APP_ID
  if (!appId) {
    // Fallback: accept ?appId=... for manual testing if env not set
    const qp = req.nextUrl.searchParams.get('appId') || ''
    if (qp) appId = qp
  }
  if (!appId) return NextResponse.json({ error: 'PINTEREST_APP_ID not set' }, { status: 500 })

  const redirect = `${getBaseUrl()}/api/auth/callback`
  const url = `https://www.pinterest.com/oauth/?client_id=${encode(appId)}&redirect_uri=${encode(redirect)}&response_type=code&scope=boards:read,pins:read,boards:write,pins:write`
  return NextResponse.json({ url })
}



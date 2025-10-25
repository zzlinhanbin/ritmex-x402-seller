import { NextResponse } from 'next/server';

export async function GET() {
  const now = new Date();
  
  return NextResponse.json({
    timestamp: now.toISOString(),
    unix: Math.floor(now.getTime() / 1000),
    readable: now.toLocaleString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
}

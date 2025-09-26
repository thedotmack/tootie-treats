import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Check if the request is for Keystatic routes
  const isKeystatic = url.pathname.startsWith('/keystatic') || url.pathname.startsWith('/api/keystatic');

  // Block Keystatic in production (when not on preview.tootie.space)
  if (isKeystatic) {
    const hostname = request.headers.get('host') || '';

    // Allow Keystatic only on preview.tootie.space or localhost
    const isPreview = hostname.includes('preview.tootie.space') ||
                     hostname.includes('localhost') ||
                     hostname.includes('127.0.0.1');

    if (!isPreview) {
      // Return 404 for production to hide the existence of these routes
      return new NextResponse(null, { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/keystatic/:path*',
    '/api/keystatic/:path*',
  ],
};
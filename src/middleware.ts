import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('csrftoken');

  console.log('Request Path:', request.nextUrl.pathname);
  console.log('Token:', token);

  if (request.nextUrl.pathname === '/sign-in' ||
    request.nextUrl.pathname === '/sign-up' ||
    request.nextUrl.pathname.startsWith('/sign-up/password')) {
  return NextResponse.next();
}

  if (request.nextUrl.pathname.startsWith('/_next/') ||
      request.nextUrl.pathname.startsWith('/favicon.ico') ||
      request.nextUrl.pathname.startsWith('/static/') || 
      request.nextUrl.pathname.endsWith('.js') || 
      request.nextUrl.pathname.endsWith('.css') || 
      request.nextUrl.pathname.endsWith('.png') || 
      request.nextUrl.pathname.endsWith('.jpg') || 
      request.nextUrl.pathname.endsWith('.svg') || 
      request.nextUrl.pathname.endsWith('.woff') || 
      request.nextUrl.pathname.endsWith('.ttf') || 
      request.nextUrl.pathname.endsWith('.woff2')) { 
    return NextResponse.next();
  }

  if (!token) {
    console.log('Redirecting to sign-in due to missing token');
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/:path*'
  ],
};

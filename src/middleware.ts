import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('csrftoken');

  console.log('Request Path:', request.nextUrl.pathname);
  console.log('Token:', token);

  // Allow access to the sign-in and sign-up pages
  if (request.nextUrl.pathname === '/sign-in' ||
    request.nextUrl.pathname === '/sign-up' ||
    request.nextUrl.pathname.startsWith('/sign-up/password')) {
  return NextResponse.next();
}

  // Allow access to static assets
  if (request.nextUrl.pathname.startsWith('/_next/') || // Next.js static assets
      request.nextUrl.pathname.startsWith('/favicon.ico') || // Favicon
      request.nextUrl.pathname.startsWith('/static/') || // Custom static directory if used
      request.nextUrl.pathname.endsWith('.js') || // JavaScript files
      request.nextUrl.pathname.endsWith('.css') || // CSS files
      request.nextUrl.pathname.endsWith('.png') || // PNG images
      request.nextUrl.pathname.endsWith('.jpg') || // JPG images
      request.nextUrl.pathname.endsWith('.svg') || // SVG images
      request.nextUrl.pathname.endsWith('.woff') || // WOFF fonts
      request.nextUrl.pathname.endsWith('.ttf') || // WOFF fonts
      request.nextUrl.pathname.endsWith('.woff2')) { // WOFF2 fonts
    return NextResponse.next();
  }

  // Redirect to sign-in if not authenticated
  if (!token) {
    console.log('Redirecting to sign-in due to missing token');
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/:path*' // Apply middleware to all paths
  ],
};

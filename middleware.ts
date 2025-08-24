import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Sadece anasayfa isteğinde yönlendir
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/de', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|api|static).*)'],
};

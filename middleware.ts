import { NextRequest, NextResponse } from 'next/server';

const locales = ['de', 'en', 'tr'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|api|static).*)'],
};

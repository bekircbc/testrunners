import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'de', 'tr'];
const defaultLocale = 'de';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Eğer yol locale ile başlamıyorsa, default locale'a yönlendir
  if (
    pathname === '/' ||
    !locales.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|api|static).*)'],
};

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/instructor/auth/signin';

  const token = request.cookies.get('token')?.value || '';

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/instructor/dashboard', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/instructor/auth/signin', request.nextUrl));
  }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/instructor/auth/signin',
    '/instructor/dashboard',
  ]
}
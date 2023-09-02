import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPathForInstructor = path === '/instructor/auth/signin';
  const isPublicPathForAdmin = path === '/admin/auth/signin';
  const isPublicPathForApplicant = path === '/applicant/auth/signin';
  const isPublicPathForStudent = path === '/student/auth/signin';


  const isPrivatePathForInstructor = path === '/instructor/dashboard';
  const isPrivatePathForAdmin = path === '/admin/dashboard';

  const isPrivatePathForApplicant = path === '/applicant/dashboard' || path === '/applicant/dashboard/admissionCard';
  
  const isPrivatePathForStudent = path === '/student/dashboard' || path === '/student/dashboard/studentCourseAddDrop' || path === '/student/dashboard/studentGradeBySem' || path === '/student/dashboard/studentPayment' || path === '/student/dashboard/studentProfile' || path === '/student/dashboard/studentRoutine';

  const token = request.cookies.get('token')?.value || '';

  if(isPublicPathForInstructor && token) {
    return NextResponse.redirect(new URL('/instructor/dashboard', request.nextUrl));
  }

  if (!isPublicPathForInstructor && !token && isPrivatePathForInstructor) {
    return NextResponse.redirect(new URL('/instructor/auth/signin', request.nextUrl));
  }


  if(isPublicPathForAdmin && token) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.nextUrl));
  }

  if (!isPublicPathForAdmin && !token && isPrivatePathForAdmin) {
    return NextResponse.redirect(new URL('/admin/auth/signin', request.nextUrl));
  }


  if(isPublicPathForApplicant && token) {
    return NextResponse.redirect(new URL('/applicant/dashboard', request.nextUrl));
  }

  if (!isPublicPathForApplicant && !token && isPrivatePathForApplicant) {
    return NextResponse.redirect(new URL('/applicant/auth/signin', request.nextUrl));
  }


  if(isPublicPathForStudent && token) {
    return NextResponse.redirect(new URL('/student/dashboard', request.nextUrl));
  }

  if (!isPublicPathForStudent && !token && isPrivatePathForStudent) {
    return NextResponse.redirect(new URL('/student/auth/signin', request.nextUrl));
  }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/instructor/auth/signin',
    '/admin/auth/signin',
    '/applicant/auth/signin',
    '/student/auth/signin',


    '/instructor/dashboard',
 

    '/admin/dashboard',


    '/applicant/dashboard',
    '/applicant/dashboard/admissionCard',


    '/student/dashboard',
    '/student/dashboard/studentCourseAddDrop',
    '/student/dashboard/studentGradeBySem',
    '/student/dashboard/studentPayment',
    '/student/dashboard/studentProfile',
    '/student/dashboard/studentRoutine',
  ]
}
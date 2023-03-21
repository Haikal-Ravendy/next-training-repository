import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    console.log('req', req)
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: false,
    })
    console.log('token middle', token)
    console.log('next url', req.nextUrl.pathname)
    if (req.nextUrl.pathname.startsWith("/dashboard") && !token) {
        console.log("redirecting to login")
        return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard',
        '/dashboard/:path*'
    ]
}
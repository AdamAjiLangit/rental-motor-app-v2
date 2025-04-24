import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/form") && !token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (pathname.startsWith("/pesanan") && !token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (pathname.startsWith("/login") && token) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/form", "/pesanan", "/login"],
};
import { NextResponse, NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    try {
        // const homePath = path === "/"
        const isPublicPath = path === "/login" || path === "/register"

        // If there is no token and page is not public, redirect to login
        const token = request.cookies.get("token")?.value || ""
        if (!token && !isPublicPath) {
            return NextResponse.redirect(new URL("/login", request.nextUrl))
        }
        // If there is a token and the page is public redirect to home page
        if (token && isPublicPath) {
            return NextResponse.redirect(new URL("/", request.nextUrl))
        }


    } catch (error: any) {
        return NextResponse.error()
    }

}

export const config = {
    matcher: [
        // "/",
        "/login",
        "/register",
    ]
}


// import { NextResponse, NextRequest } from 'next/server'

// export async function middleware(request: NextRequest) {
//     const path = request.nextUrl.pathname
//     try {
//         const isPublicPath = path === "/login" || path === "/register"

//         // Check if token exists and is valid
//         const token = request.cookies.get("token")?.value || ""
//         const tokenIsValid = await validateToken(token)

//         // If there is no token or token is invalid and page is not public, redirect to login
//         if ((!tokenIsValid || token === "") && !isPublicPath) {
//             return NextResponse.redirect(new URL("/login", request.nextUrl))
//         }
//         // If there is a token and the page is public redirect to home page
//         if (tokenIsValid && isPublicPath) {
//             return NextResponse.redirect(new URL("/", request.nextUrl))
//         }
//     } catch (error: any) {
//         return NextResponse.error()
//     }
// }

// async function validateToken(token: string): Promise<boolean> {
//     const tokenIsValid = await tokenValidityCheck(token);
//     return tokenIsValid;
// }

// async function tokenValidityCheck(token: string): Promise<boolean> {
//     const expirationTime = 60 * 60 * 24 * 1000;
//     const tokenData = decodeToken(token);

//     if (!tokenData || !tokenData.exp) {
//         return false;
//     }

//     const currentTime = Date.now();
//     const tokenExpiration = tokenData.exp * 1000;
//     return currentTime < tokenExpiration - expirationTime;
// }

// function decodeToken(token: string) {
//     const decodedToken = JSON.parse(atob(token.split('.')[1]));
//     return decodedToken;
// }

// export const config = {
//     matcher: [
//         "/login",
//         "/register",
//     ]
// }

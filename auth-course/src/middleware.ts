import { auth } from "./auth"

export default auth((req) => {

    console.log("ROUTER:", req.nextUrl.pathname);
})

export const config = {
    matcher: ["/auth/login", "/auth/register"],
}
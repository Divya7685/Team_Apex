import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
// import {PrismaAdapter} from "@auth/prisma-adapter"
// import authConfig from "./auth.config"
// import { db } from "./lib/db"

//import GitHub from "next-auth/providers/github"

export const {
    handlers:{GET,POST},
    auth,
    // signIn,
    // signOut,

}=NextAuth({
    // adapter:PrismaAdapter(db),
    // session:{strategy:"jwt"},
    // ...authConfig
    providers:[Github],
});
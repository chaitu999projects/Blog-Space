import { DBConnection } from "@/app/utils/config/db";
import UserModel from "@/app/utils/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GitHub from 'next-auth/providers/github'

export const {auth, signIn, signOut, handlers:{GET, POST}} = NextAuth({
    providers:[
        CredentialsProvider({
            name: "credentials",
            authorize: async(credentials) => {
                await DBConnection();
                const user = await UserModel.findOne({
                    email: credentials?.email,
                    password: credentials?.password,
                });
                if(!user) {
                    return null
                } else {
                    return {name:user.usernamae, email:user.email, password:user.password}
                }

            }
        }),
        // GitHub({
        //     clientId: process.env.AUTH_GITHUB_ID,
        //     clientSecret: process.env.AUTH_GITHUB_SECRET
        // })
    ], secret: process.env.AUTH_SECRET,
    pages: {
        signIn: '/login',
        
    }

})
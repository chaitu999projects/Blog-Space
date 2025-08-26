import * as Sentry from "@sentry/browser"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Auth0Provider from "next-auth/providers/auth0";   // ✅ Import Auth0
import { DBConnection } from "@/app/utils/config/db";
import UserModel from "@/app/utils/models/User";

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
  providers: [
    // ✅ Auth0 Provider
    Auth0Provider({
      clientId: process.env.AUTH_OKTA_ID,
      clientSecret: process.env.AUTH_OKTA_SECRET,
      issuer: process.env.AUTH_OKTA_ISSUER,
    }),

    // ✅ Credentials Provider (your DB login)
    CredentialsProvider({
      name: "credentials",
      authorize: async (credentials) => {
        await DBConnection();
        const user = await UserModel.findOne({
          email: credentials?.email,
          password: credentials?.password,
        });

        if (!user) {
          return null;
        } else {
          return {
            id: user._id.toString(),
            name: user.userName,   // fixed typo from "usernamae"
            email: user.email,
          };
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      const scope = Sentry.getCurrentScope();
      scope.setUser({
        id: token.sub,  // works for both Auth0 + Credentials
        email: session.user?.email,
      });

      return session;
    },
  },

  // ✅ use NEXTAUTH_SECRET not AUTH_SECRET
  secret: process.env.NEXTAUTH_SECRET,

  trustedHosts: [
    "blog-space-w84r.onrender.com", 
    "localhost:3000",
    "localhost:10000",
  ],

  pages: {
    signIn: "/login",
  },
});

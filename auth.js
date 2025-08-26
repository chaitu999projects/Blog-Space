import * as Sentry from "@sentry/browser"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Auth0Provider from "next-auth/providers/auth0";
import { DBConnection } from "@/app/utils/config/db";
import UserModel from "@/app/utils/models/User";

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
  providers: [
    // Auth0 Provider
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),

    // Credentials Provider
    CredentialsProvider({
      name: "credentials",
      authorize: async (credentials) => {
        await DBConnection();
        const user = await UserModel.findOne({
          email: credentials?.email,
          password: credentials?.password,
        });

        if (!user) return null;

        return {
          id: user._id.toString(),
          name: user.userName,
          email: user.email,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      const scope = Sentry.getCurrentScope();
      scope.setUser({
        id: token.sub,
        email: session.user?.email,
      });

      return session;
    },
  },

  trustedHosts: [
    "blog-space-w84r.onrender.com",
    "localhost:3000",
    "localhost:10000",
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },
});

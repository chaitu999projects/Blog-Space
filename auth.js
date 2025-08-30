
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DBConnection } from "@/app/utils/config/db";
import UserModel from "@/app/utils/models/User";

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
  providers: [
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
            name: user.userName, 
            email: user.email,
          };
        }
      },
    }),
  ],secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  pages: {
    signIn: "/login",
  },
});

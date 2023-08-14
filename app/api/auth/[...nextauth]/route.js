import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const AuthOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
  secret: process.env.NEXT_AUTH_SECRET
  ,
  pages: {
    signIn: "/",
    error: "/api/auth/error",
  },
});

export { AuthOptions as GET, AuthOptions as POST };

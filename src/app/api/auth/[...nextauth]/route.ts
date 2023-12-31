import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOption = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRECT!,
        }),
    ],
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };

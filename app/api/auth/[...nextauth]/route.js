import NextAuth from 'next-auth/next'
import GoogleProvider from "next-auth/providers/google";

const AuthOptions =  NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '350775443637-mvh1ftie8qqkaabnqiqqnvtkgmg545pv.apps.googleusercontent.com',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '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'
        })
    ],
})

export {AuthOptions as GET, AuthOptions as POST}
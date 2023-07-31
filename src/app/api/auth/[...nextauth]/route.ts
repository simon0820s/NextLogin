import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com"},
                password: { label: "Password", type: "password", placeholder: "******"}
            },
            authorize(credentials, req) {
                const user = { id: "1", fullname: 'J Smith', email: 'sar@gmail.com' }
                return user
            }
        })
    ],
    callbacks: {
        jwt({account, token, user, profile, session}) {
            if (user) token.user = user
            console.log(token)
            return token
        },
    }
})

export { handler as GET, handler as POST}
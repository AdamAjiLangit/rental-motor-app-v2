import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });

                    if (!response.ok) {
                        return null;
                    }

                    const data = await response.json();

                    if (data && data.access_token && data.user) {
                        return {
                            id: data.user.id,
                            name: data.user.nama_pengguna,
                            accessToken: data.access_token,
                            email: data.user.email,
                        };
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error('Login error:', error);
                    return null;
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.user.id = token.id;
            session.user.email = token.email;
            return session;
        },
    },
});
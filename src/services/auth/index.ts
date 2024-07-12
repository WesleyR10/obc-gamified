import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/nodemailer'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '../database'
// import { createStripeCustomer } from '../stripe'

const [user, password, host, port] =
  process.env.EMAIL_SERVER?.split(/:|@/) ?? []

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/login',
    error: '/auth/error',
    verifyRequest: '/auth/login',
    newUser: '/app',
  },
  adapter: PrismaAdapter(db),
  providers: [
    EmailProvider({
      server: {
        host,
        port: Number(port),
        auth: {
          user,
          pass: password,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  // events: {
  //   createUser: async (message) => {
  //     await createStripeCustomer({
  //       name: message.user.name as string,
  //       email: message.user.email as string,
  //     })
  //   },
  // },
})

'use server'

import { signOut } from '../services/auth'

export const logout = async () => {
  await signOut({ redirect: true, redirectTo: '/auth/login' })
}

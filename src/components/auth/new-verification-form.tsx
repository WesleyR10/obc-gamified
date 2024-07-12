'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
// import { newVerification } from '@/actions/new-verification'
import { Header } from './header'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { Button } from '../ui/button'

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  // useEffect(() => {
  //   if (!token) {
  //     setError('Missing token!')
  //     return
  //   }
  //
  //   newVerification(token)
  //     .then((data) => {
  //       if (data.success) {
  //         setSuccess('Verification successful!')
  //       } else {
  //         setError(data.error || 'Something went wrong!')
  //       }
  //     })
  //     .catch(() => {
  //       setError('Something went wrong!')
  //     })
  // }, [token])

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <Header
        title="Verify Your Email"
        subtitle="Please confirm your email to continue."
      />
      <FormSuccess message={success} />
      <FormError message={error} />
      <Button className="w-full mt-4" disabled={true}>
        Verify Email
      </Button>
    </div>
  )
}

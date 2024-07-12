'use client'

import { useState } from 'react'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { Button } from '../ui/button'
import { Header } from './header'
import { InputWithLabel } from './input-with-label'

export const NewPasswordForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <Header
        title="Set your new password"
        subtitle="Please enter your new password."
      />

      <form className="mt-8 mb-4" /* onSubmit={ handleSubmit(onSubmit) } */>
        <div className="mb-4">
          <InputWithLabel
            id="password"
            label="New Password"
            placeholder="••••••••"
            type="password"
          />
        </div>
        <div className="mb-4">
          <InputWithLabel
            id="confirmPassword"
            label="Confirm New Password"
            placeholder="••••••••"
            type="password"
          />
        </div>

        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type="submit" /* disabled={ isPending } */ className="w-full">
          Set new password
        </Button>
      </form>
    </div>
  )
}

import React from 'react'
import { BottomGradient } from './bottom-gradient'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const icons: Record<string, React.ElementType> = {
  GitHub: FaGithub,
  Google: FcGoogle,
}

export const SocialLoginButton = ({ platform }: { platform: string }) => {
  const Icon = icons[platform]
  return (
    <button
      className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      type="submit"
    >
      <Icon className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        {platform}
      </span>
      <BottomGradient />
    </button>
  )
}

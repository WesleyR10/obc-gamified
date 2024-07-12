import React from 'react'
import { LabelInputContainer } from './label-input-container'
import { Label } from '../aceternity-UI/label'
import { Input } from '../aceternity-UI/input'

type InputWithLabelProps = {
  id: string
  label: string
  placeholder: string
  type?: string
  className?: string
}

export const InputWithLabel = ({
  id,
  label,
  placeholder,
  type = 'text',
  className,
}: InputWithLabelProps) => {
  return (
    <LabelInputContainer className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder={placeholder} type={type} />
    </LabelInputContainer>
  )
}

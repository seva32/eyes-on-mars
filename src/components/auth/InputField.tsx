'use client'
import React, { ChangeEventHandler } from 'react'

interface InputFieldProps {
  id?: string
  label: string
  type?: 'text' | 'email'
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  required?: boolean
}

export function InputField({
  id,
  label,
  type,
  value,
  onChange,
  required,
}: InputFieldProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <>
      <label className="mb-2 text-sm text-zinc-200">{label}</label>
      <input
        id={id}
        type={type}
        className="px-4 w-full text-base disable-autofill rounded-lg border bg-zinc-950 border-zinc-800 h-[50px] text-zinc-200"
        value={value}
        onChange={onChange}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          borderColor: isHovered ? '#FF4D4D' : '#333',
        }}
        required={required}
      />
    </>
  )
}

import React, { ChangeEvent } from 'react'

/**
 * Props for the InputField component.
 */
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The id of the input field */
  id: string
  /** The label for the input field */
  label: string
  /** The function to call when the input value changes */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * A reusable input field component.
 *
 * @param {InputFieldProps} props - The props for the component.
 * @returns {JSX.Element} The rendered input field component.
 */
export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  ...props
}) => (
  <div className="w-full mb-3">
    <label htmlFor={id} className="block mb-1 font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 border rounded"
      autoComplete={id}
      aria-required={required}
      {...props}
    />
  </div>
)

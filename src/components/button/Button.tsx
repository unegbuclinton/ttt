import React from 'react'

const Button = ({
  children,
  className,
  small,
}: {
  children: React.ReactNode
  small?: boolean
  className?: string
}) => {
  return (
    <button
      className={`border-2 font-bold border-primary text-primary rounded-3xl bg-white ${
        small
          ? 'h-10 px-10 text-base'
          : 'h-[60px] text-lx px-14 rounded-[56px] '
      } ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

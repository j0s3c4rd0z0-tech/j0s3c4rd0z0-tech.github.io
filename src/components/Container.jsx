// Container.jsx — Consistent max-width wrapper
import clsx from 'clsx'

export function Container({ className, children, ...props }) {
  return (
    <div
      className={clsx('relative z-10 max-w-5xl mx-auto px-6', className)}
      {...props}
    >
      {children}
    </div>
  )
}

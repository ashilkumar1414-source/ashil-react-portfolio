import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.scss';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: string;
  download?: string | boolean;
  external?: boolean;
  children: ReactNode;
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  download,
  external,
  children,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}

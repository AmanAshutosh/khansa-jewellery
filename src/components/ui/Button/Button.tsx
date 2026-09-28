import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import './Button.css';

type Variant = 'solid' | 'outline' | 'light' | 'link';

interface BaseProps {
  variant?: Variant;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
}

type AsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type AsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export default function Button(props: AsLink | AsButton) {
  const { variant = 'solid', arrow = false, children, className = '', ...rest } = props;
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      <span className="btn__label">{children}</span>
      {arrow && <ArrowRight className="btn__arrow" size={15} strokeWidth={1.25} aria-hidden="true" />}
    </>
  );

  if (typeof rest.href === 'string') {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

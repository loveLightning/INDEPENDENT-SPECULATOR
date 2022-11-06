import { BaseLinkProps } from './BaseLink.props';
import styles from './BaseLink.module.css';
import cn from 'classnames';
import Link from 'next/link';
import button from '../../../public/button-arrow.svg'
import Image from 'next/image'

export const BaseLink = ({
  children,
  appearance = 'primary',
  border = false,
  arrow = false,
  path = '/',
  className,
  ...props
}: BaseLinkProps): JSX.Element => {
  return (
    <>
      <Link href={path}>
        <a
          className={cn(styles.link, className, {
            [styles.default]: appearance === 'default',
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
            [styles.dark]: appearance === 'dark',
            [styles.border]: border,
            [styles.arrow]: arrow,
          })}
          {...props}
        >
          {children}
          {arrow && (
            <span>
              <img src="/button-arrow.svg" alt="->" />
            </span>
          )}
        </a>
      </Link>
    </>
  );
};

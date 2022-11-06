import { BaseButtonProps } from './BaseButton.props';
import styles from './BaseButton.module.css';
import cn from 'classnames';
import Image from 'next/image';
import buttonArrow from '../../../public/button-arrow.svg'

export const BaseButton = ({
  children,
  appearance = 'primary',
  border = false,
  arrow = false,
  className,
  ...props
}: BaseButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.btn, className, {
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
          <Image src={buttonArrow} alt='->' layout='fill' />
        </span>
      )}
    </button>
  );
};

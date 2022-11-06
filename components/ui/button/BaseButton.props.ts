import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BaseButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance?: 'default' | 'primary' | 'dark' | 'ghost';
  border?: boolean;
  arrow?: boolean;
}

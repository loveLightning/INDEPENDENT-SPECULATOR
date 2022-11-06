import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BaseLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
  appearance?: 'default' | 'primary' | 'dark' | 'ghost';
  border?: boolean;
  arrow?: boolean;
  path?: string;
}

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface GuestHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface Props {
  id: number
  title: string
  path: string
}

export const dataMenu: Props[] = [
  {
    id: 0,
    title: 'About us',
    path: '/about'
  },
  {
    id: 1,
    title: 'Services',
    path: '/services'
  },
  {
    id: 2,
    title: 'Contact us',
    path: '/contact'
  },
  {
    id: 3,
    title: 'Track Record',
    path: '/track'
  },
]
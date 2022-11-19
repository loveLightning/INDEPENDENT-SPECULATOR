import { DetailedHTMLProps, HTMLAttributes } from 'react';

import linkedin from '../../public/linkedin-dark.svg'
import youtube from '../../public/youtube-dark.svg'
import facebook from '../../public/facebook-dark.svg'
import twitter from '../../public/twitter.svg'

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

interface Props {
  id: number
  title: string
  path: string
}

export const footerLinks: Props[] = [
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
    title: 'Testimonials',
    path: '/'
  },
  {
    id: 3,
    title: 'Contact',
    path: '/contact'
  },
  {
    id: 4,
    title: 'About us',
    path: '/about'
  },
  {
    id: 5,
    title: 'Track Record',
    path: '/'
  }
]

interface SocialNetworks {
  title: string
  path: '/'
  src: string
  id: number
}

export const socialDark: SocialNetworks[] = [
  {
    id: 0,
    title: 'Twitter',
    path: '/',
    src: twitter
  },
  {
    id: 1,
    title: 'Linkedin',
    path: '/',
    src: linkedin
  },
  {
    id: 2,
    title: 'Youtube',
    path: '/',
    src: youtube
  },
  {
    id: 3,
    title: 'Facebook',
    path: '/',
    src: facebook
  }
]

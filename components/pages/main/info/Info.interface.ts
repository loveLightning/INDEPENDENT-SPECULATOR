import twitter from '../../../../public/twitter.svg'
import linkedin from '../../../../public/linkedin.svg'
import youtube from '../../../../public/youtube.svg'
import facebook from '../../../../public/facebook.svg'

export interface SocialNetworks {
  twitter?: string
  linkedin?: string
  youtube?: string
  facebook?: string
}

export const dataSocialNetworks = [
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

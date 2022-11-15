import React from 'react'
import cl from './SignUp.module.css'
import Image from 'next/image'
import logo from '../public/logo-small.svg'
import Link from 'next/link'

interface Props {
    children: React.ReactNode
}

export const SignUpLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.back}>
        <div className='container'>
          <div className={cl.header}>
            <Image className={cl.logo} src={logo} alt='Logo' />
            <Link href="/"><p className={cl['logo-desc']}>Back to home page</p></Link>
          </div>
          {children}
        </div>
      </div>
      <div className={cl.bottom}>
        <div className='container'>
        </div>
      </div>
    </div>
  )
}

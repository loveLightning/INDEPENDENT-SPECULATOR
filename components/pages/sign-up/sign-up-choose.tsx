import { Switch } from '@mui/material'
import React from 'react'
import cl from './sign-up-choose.module.css'
import { dataServiceChoose } from './types'
import Image from 'next/image'
import next from '../../../public/next.svg'

export const SignUpChoose = () => {
  return (
    <>
      <div className={cl.content}>
        <h2 className={cl.title}><span className={cl['title-one']}>Welcome to</span> <br /><span className={cl['title-two']}>Independent Speculator</span> </h2>
        <div className={cl.line}>
          <div className={cl['line-two']}></div>
          <div className={cl['line-one']}></div>
        </div>
      </div>
      <div className={cl.form}>
        <h2 className={cl.tite}>Choose service</h2>
        <div className={cl.all}>
          {dataServiceChoose?.map(el => (
            <div className={cl.card}>
              <div className={cl.top}>
                {el.subtitle}
              </div>
              <div className={cl.line}></div>
              <div className={cl.wrap}>
                <div className={cl.price}>
                  {el.id === 0 && <p  className={cl.dollar}>Free</p>}
                  {el.id === 1 && <div><p className={cl.dollar}>$50</p><p className={cl.time}>Monthly</p></div>}
                  {el.id === 2 && <div><p className={cl.dollar}>$1000</p><p className={cl.time}>Quarterly</p></div>}
                </div>
                <div className={cl.name}>
                  {el.title}
                </div>
                <div className={cl.swither}>
                  {el.id === 1 && <div><Switch style={{
                    color: 'white',
                  }} /></div>}
                  {el.id === 2 && <div><Switch style={{
                    color: 'white'
                  }} /></div>}
                </div>
                <div className={cl.buttons}>
                  <button className={cl['btn-one']}>Details</button>
                  <button className={cl['btn-two']}>Choose</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className={cl.sign}>Sign Up <div className={cl['wrap-img']}><Image className={cl.img} src={next} alt="Arrow" /></div></button>

      </div>
    </>
  )
}

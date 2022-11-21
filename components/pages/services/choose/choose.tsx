import React from 'react'
import cl from './choose.module.css'
import { ServicesQuestions } from '../questions/questions'

export const ServicesChoose = () => {
  return (
    <div className={cl.back}>
      <div className='container'>
        <div className={cl.wrapper}>
          <h3 className={cl.title}>choose your services</h3>
          <div className={cl.choose}>
            <div className={cl.left}>Our clients believe in the value of our work. They trust that we’ll do everything in our power to deliver value that’s many times greater than what they pay</div>
            <div className={cl.right}>We are publishers, not financial advisors. We do not make any buy, sell, or other investment recommendations in any of our services. We do not offer, nor make any financial recommendations to individuals. We do tell clients what speculations we are making, and why, in our paid services. Clients then make their own decisions.</div>
          </div>
          <div className={cl['all-card']}>
          </div>
        </div>
        <ServicesQuestions />
      </div>
    </div>
  )
}

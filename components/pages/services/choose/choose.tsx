import React from 'react'
import cl from './choose.module.css'
import { ServicesQuestions } from '../questions/questions'
import Link from 'next/link'
import { data } from './types'

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
            {data?.map((el) => (
              <div className={cl.card} key={el.id}>
                <div className={cl.inner}>
                  <div className={cl.cont}>
                    <div className={`${cl[el.class]} ${cl.img}`}>
                      <p className={cl.subtitle}>{el.subtitle}</p>
                      <p className={cl.tit}>{el.title}</p>
                    </div>
                    <div className={cl['wrap-desc']}>
                      <p className={cl.desc}>{el.desc}</p>
                    </div>
                    <div className={cl.advantages}>
                      {el?.plus?.map(adv => (
                        <div className={cl.advantage}>
                          <p className={cl['desc-adv']}>{adv}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={cl.line}>

                  </div>
                  <div className={cl['wrap-price']}>
                    {el?.price.map(pr => (
                      <p className={cl.price}>{pr}</p>
                    ))}
                  </div>
                  <div>
                    <Link href={el.link}>
                      <button className={cl.btn}>{el.btn} <div className={cl.image}></div></button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ServicesQuestions />
      </div>
    </div>
  )
}

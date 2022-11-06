import React from 'react'
import cl from './choose.module.css'
import newsPaper from '../../../../public/newspaper.svg'
import like from '../../../../public/like.svg'
import cook from '../../../../public/cook.svg'
import Image from 'next/image'
import ok from '../../../../public/ok.svg'
import arrow from '../../../../public/arrow-up.svg'
import cookBlack from '../../../../public/cook-black.svg'
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

            <div className={cl.card}>
              <div className={cl.top}>
                <Image src={newsPaper} alt='newspaper' />
                <div className={cl.name}>
                  <p className={cl.ed}>EDUCATION</p>
                  <p className={cl.seconded}>Speculator's Digest</p>
                </div>
              </div>
              <div>
                <p className={cl.description}>A free online educational service for investors who want to become top performing speculators.</p>
              </div>
              <div className={cl.all}>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <div className={cl.space}>
                      <Image className={cl.ok} src={ok} alt='Ok' />
                    </div>
                  </div>
                  <p className={cl.plus}>Free digest with fresh investment-related news and ideas on a daily basis.</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Free reports on investment ideas for speculators.</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Honest, unbiased trend analysis</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Heads up on events, appearances, and other educational opportunities.</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>"In The Pit" company grillings</p>
                </div>
              </div>
              <div className={cl.line}></div>
              <div className={cl['price-one']}>
                <span>Free</span>
              </div>
              <button className={cl.btn}>View more details</button>
            </div>

            <div className={cl.card}>
              <div className={cl.top}>
                <Image src={like} alt='like' />
                <div className={cl.name}>
                  <p className={cl.ed}>GUIDANCE</p>
                  <p className={cl.seconded}>My Take</p>
                </div>
              </div>
              <div>
                <p className={cl.description}>Our no frills, high-impact introductory level newsletter provides action-enabling guidance on investments that interest our readers.</p>
              </div>
              <div className={cl.lne}>

              </div>
              <div className={cl.all}>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Requests for coverage</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Searchable Database</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Books and More</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Free Access to Blog</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Clients-Only Meetings</p>
                </div>
              </div>
              <div className={cl.line}></div>
              <div className={cl.price}>
                <span>$500 / <span className={cl.time}>year</span></span>
                <span>$50 /<span className={cl.time}>month</span></span>
              </div>
              <button className={cl.btn}>View more details</button>
            </div>

            <div className={cl.card}>
              <div className={cl.top}>
                <Image src={cookBlack} alt='cook' />
                <div className={cl.name}>
                  <p className={cl.ed}>RESEARCH</p>
                  <p className={cl.seconded}>The Independent Speculator</p>
                </div>
              </div>
              <div>
                <p className={cl.description}>Subscription to The Independent Speculator newsletter, our flagship monthly service that provides actionable investment ideas, 24/7 market monitoring, and more.</p>
              </div>
              <div className={cl.lne}>

              </div>
              <div className={cl.all}>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <div className={cl.space}>
                      <Image className={cl.ok} src={ok} alt='Ok' />
                    </div>
                  </div>
                  <p className={cl.plus}>Email Alerts</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Company News and Analysis</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>The Go To List</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Buy If You Dare List</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>My Take Included</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Field Trip Invitations</p>
                </div>
                <div className={cl.service}>
                  <div className={cl.space}>
                    <Image className={cl.ok} src={ok} alt='Ok' />
                  </div>
                  <p className={cl.plus}>Priority Support</p>
                </div>
              </div>
              <div className={cl.line}></div>
              <div className={cl.price}>
                <span>$500 / <span className={cl.time}>year</span></span>
                <span>$50 /<span className={cl.time}>month</span></span>
              </div>
              <button className={cl.btn}>View more details</button>
            </div>

          </div>
        </div>
        <ServicesQuestions />
      </div>
    </div>
  )
}

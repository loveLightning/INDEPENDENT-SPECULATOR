import React from 'react'
import cl from './main.module.css'
import photo from '../../../../public/photo.svg'
import Image from 'next/image'
import { firstDataDigest, secondDataDigest } from './types'
import checkReady from '../../../../public/check-ready.svg'
import { Testimonials } from '../../main/testimonials/Testimonials'
import { ServiceSubscribe } from '../subscribe/subscribe'

export const ServicesMainDigest = () => {
    return (
        <>
            <div className={cl.main}>
                <div className='container'>
                    <div className={cl.wrapper}>
                        <div className={cl.left}>
                            <div className={cl.firstback}></div>
                            <div className={cl.secondback}><div className={cl.image}><Image src={photo} alt='Photo' /></div></div>
                        </div>
                        <div className={cl.right}>
                            <h2 className={cl.title}>The Speculator's Digest</h2>
                            <div className={cl.line}></div>
                            <div className={cl.desc}>The Speculator’s Digest is our FREE educational service for investors who want to learn the art and discipline of successful speculation. Here you will find fresh ideas, market data, and relevant news almost daily. As the name suggests, a digest form of this information is available on an opt-in basis. Access to free educational reports and other special publications and media is included. Our free, no spam weekly email includes links to each week’s articles and original analysis not published anywhere else. How useful is it? Click here to see what professional geologist who joined us on a due diligence trip has to say about our work.</div>
                            <button className={cl.btn}>Subscribe to The Speculator’s Digest</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.background}>
                <div className='container'>
                    <div className={cl.digest}>
                        <div className={cl.check}>
                            <Image src={checkReady} alt='Check' />
                            <p className={cl.medal}>The Speculator's Digest weekly email gets you</p>
                        </div>
                        <div className={cl.flex}>
                            <div className={cl['block-left']}>
                                {firstDataDigest?.map(el => (
                                    <div className={cl.col} key={el.id}>
                                        <p className={cl['col-title']}>{el.title}</p>
                                        <p className={cl['col-desc']}>{el.desc}</p>
                                        {el.line && <div className={cl['line-el']}></div>}
                                    </div>
                                ))}
                            </div>
                            <div className={cl['vertical-line']}></div>
                            <div className={cl['block-right']}>
                                {secondDataDigest?.map(el => (
                                    <div className={cl.col} key={el.id}>
                                        <p className={cl['col-title']}>{el.title}</p>
                                        <p className={cl['col-desc']}>{el.desc}</p>
                                        {el.line && <div className={cl['line-el']}></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className={cl.testimonials}>Testimonials</p>
                    <Testimonials />
                </div>
            </div>
            <ServiceSubscribe />
        </>
    )
}

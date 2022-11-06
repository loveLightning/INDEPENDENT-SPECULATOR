import React from 'react'
import cl from './about.module.css'
import logoSmall from '../../../../public/logo-small.svg'
import Image from 'next/image'

export const AboutBussiness = () => {
    return (
        <>
            <div className='container'>
                <div className={cl.block}>
                    <div className={cl['wrap-image']}>
                        <Image className={cl.image} src={logoSmall} alt='Logo' />
                    </div>
                    <div>
                        <p className={cl.desc}>
                            In short, our experience in the field, contacts in the resource industry, work ethic, and track record make us uniquely qualified to guide resource speculators.
                        </p>
                    </div>
                    <div className={cl.line}></div>
                </div>
                <div className={cl.wrapper}>
                    <div className={cl.left}>
                        <h3 className={cl.title}>How We Do Business</h3>
                        <p className={cl.subtitle}>Rather than insult your intelligence, we assume it.</p>
                        <p className={cl.more}>We’re not aiming for mass market here. We’re not interested in trying to trick, or even convince large numbers of people to sign up. There’d be no point, since, honestly, most people are not suited to a service like ours. <br /> <br />
                            Our clients are those few who understand the value of exhaustive research in the best speculative investment ideas on the market today. They find us, and we will make it worth their while if they join. Therefore, out of respect for your intelligence and the value of your time…</p>
                    </div>
                    <div className={cl.right}>
                        <p className={cl.subtitle}>Our Pledge</p>
                        <p className={cl.more}>We will never inundate you with high-pressure sales gimmicks.
                            Our communications will be as low-volume, relevant, and accurate as possible.</p>
                    </div>
                </div>
            </div>
            <div className={cl['line-width']}></div>
        </>
    )
}

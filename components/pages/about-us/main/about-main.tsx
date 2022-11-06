import React from 'react'
import cl from './about.module.css';
import notFound from '../../../../public/not-found.png'
import Image from 'next/image';

export const AboutMain = () => {
    return (
        <div className={cl.wrapper}>
            <div className="container">
                <div>
                    <h2 className={cl.title}>Independent Speculator</h2>
                </div>
                <div className={cl.line}></div>
                <div className={cl['wrap-desc']}><p className={cl.desc}>Louis James, LLC is here to inform, educate, and enable action for an elite group of savvy investors—and those who wish to become such. Our goal is to achieve extraordinary gains for ourselves and those willing and able to take the risks and apply the discipline needed to speculate successfully.</p></div>
                <div className={cl['wrapper-images']}>
                    <div className={cl.image}>
                        <Image src={notFound} alt="Image" />
                        <p className={cl['image-desc']}>Lobo Tiggre</p>
                    </div>
                    <div className={cl.image}>
                        <Image src={notFound} alt="Image" />
                        <p className={cl['image-desc']}>Antonia Tiggre</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

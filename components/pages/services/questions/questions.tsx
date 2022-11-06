import React from 'react'
import cl from './questions.module.css'
import plus from '../../../../public/plus.svg'
import Image from 'next/image'

export const ServicesQuestions = () => {
    return (
        <div className={cl.back}>
            <h3 className={cl.title}>Got Questions?</h3>
            <div className={cl['wrap-desc']}>
                <p className={cl.desc}>We’re here to help. If you don’t see your question addressed below,
                    please visit our FAQ, or contact us.</p>
            </div>
            <div className={cl.select}>
                <p>$3,000? Isn't that a little pricey?</p>
                <Image src={plus} alt='plus' />
            </div>
            <div className={cl.line}></div>
            <div className={cl.select}>
                <p>Do you have a Lifetime deal?</p>
                <Image src={plus} alt='plus' />
            </div>
            <div className={cl.line}></div>
            <div className={cl.select}>
                <p>How do I make money if you don't recommend stocks?</p>
                <Image src={plus} alt='plus' />
            </div>
        </div>
    )
}

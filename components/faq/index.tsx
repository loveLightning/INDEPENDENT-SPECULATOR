import React from 'react'
import { FaqForm } from './faq-form/faq-form'
import { FaqQuestions } from './faq-questions/faq-questions'
import cl from './faq.module.css'

export const Faq = () => {
    return (
        <div className={cl.wrapper}>
            <FaqQuestions></FaqQuestions>
            <FaqForm></FaqForm>
        </div>
    )
}

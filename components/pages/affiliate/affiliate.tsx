import React from 'react'
import cl from './affiliate.module.css'
import { FormReg } from './form/form'
import { Welcome } from './welcome/welcome'

export const Affiliate = () => {
    return (
        <div>
            <div className={cl.wrapper}>
                <div className='container'>
                    <Welcome />
                </div>
            </div>
            <div className={cl.back}>
                <div className='container'>
                    <FormReg />
                </div>
            </div>
        </div>
    )
}

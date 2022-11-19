import React, { useState } from 'react'
import cl from './questions.module.css'
import plus from '../../../../public/plus.svg'
import Image from 'next/image'
import { data, TypesSelectedItems } from './types'
import unselect from '../../../../public/minus.svg'
import select from '../../../../public/plus.svg'
import Link from 'next/link'

export const ServicesQuestions = () => {
    const [item, setItem] = useState(data)
    const toggleDesc = (el: TypesSelectedItems, id: number) => {
        let newArr = [...item]
        newArr[id].isActive = !newArr[id].isActive
        setItem(newArr)
    }
    return (
        <div className={cl.back}>
            <h3 className={cl.title}>Got Questions?</h3>
            <div className={cl['wrap-desc']}>
                <p className={cl.desc}>We’re here to help. If you don’t see your question addressed below,
                    please <Link href={'/'}><a className='target-blank'>visit our FAQ</a></Link>, or <Link href={'/'}><a className='target-blank'>contact us</a></Link>.</p>
            </div>
            {item?.map((el, id) => (
                <div key={el.id} onClick={() => toggleDesc(el, id)} className={cl.block}>
                    <div className={cl.info}>
                        <p className={cl.text}>{el.title}</p>
                        {el.isActive ? <Image src={unselect} alt="Unselect" /> : <Image src={select} alt="Select" />}

                    </div>
                    {item[item.length - 1].id !== id && <div className={cl.line}></div>}
                    {el.isActive && <div className={cl.open}><p>{el.desc}</p></div>}
                </div>
            ))}
        </div>
    )
}

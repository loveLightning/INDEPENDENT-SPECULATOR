import React, { useState } from 'react'
import cl from './faq.module.css'
import select from '../../../public/plus.svg'
import { data, TypesSelectedItems } from './types'
import Image from 'next/image'
import unselect from '../../../public/minus.svg'

export const FaqQuestions = () => {
  const [item, setItem] = useState(data)
  const toggleDesc = (el: TypesSelectedItems, id: number) => {
    let newArr = [...item]
    newArr[id].isActive = !newArr[id].isActive
    setItem(newArr)
    console.log(item)
  }

  return (
    <div className='container'>
      <div className={cl.wrapper}>
        <h2 className={cl.title}>Got Questions?</h2>
        <div className={cl['wrap-desc']}>
          <p className={cl.desc}>We’re here to help. If you don’t see your question addressed below,
            please use the form at the bottom of the page to contact us.</p>
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
    </div>
  )
}

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { testimonials } from './testimonials.props'
import styles from './testimonials.module.css'
import Image from 'next/image'
import quote from '../../../../public/quote.svg'
import Masonry from 'react-masonry-css'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import AOS from 'aos';
import 'aos/dist/aos.css';
gsap.registerPlugin(ScrollTrigger)


export const Testimonials = () => {
    useEffect(() => {
        AOS.init();
        window.addEventListener('load', AOS.refresh);
    }, [])

    const items = testimonials.map(function (item) {
        return (
            <div data-aos="fade"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine" key={item.id} className={styles.panel}>
                <div className={styles.card} key={item.id}>
                    <div className={styles['wrapper-title']}>
                        <Image className={styles.quote} height={20} width={20} src={quote} alt={item.title}></Image>
                        <div className={styles.date}>{item.date}</div>
                    </div>
                    <div className={styles.desc}>{item.desc}</div>
                    <div className={styles.name}>{item.name}</div>
                </div>
            </div>
        )
    });

    return (
        <>
            <div id='wrapper-scroll'>
                <Masonry
                    breakpointCols={2}
                    className={styles['my-masonry-grid']}
                    columnClassName={styles['my-masonry-grid_column']}
                >
                    {items}
                </Masonry>
            </div>
        </>
    )
}


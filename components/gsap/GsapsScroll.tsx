import { GsapsScrollProps } from './GsapsScroll.props';
import styles from './GsapsScroll.module.css';
import stylesNewsItem from '../pages/main/news/NewsItem.module.css';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GsapsScroll = ({ children, pointValueStart, pointValueEnd, startTo, endTo }: GsapsScrollProps): JSX.Element => {

  useEffect(() => {
    setTimeout(() => {
      const sections = gsap.utils.toArray('.news-item-wrapper');
      const container = document.getElementById('scroll-container');
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: startTo,
          end: () => endTo,
          pin: true,
          scrub: 1,
          
        },
      });
      sections.forEach((item, id) => {
        ScrollTrigger.create({
          trigger: item as HTMLElement,
          start: pointValueStart[id],
          end: () => pointValueEnd[id],
          toggleClass: stylesNewsItem.activeNewsTab,
          scrub: 1,
        })
      })

      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <>
      {pointValueStart && <div className={styles.scrollContainer} id="scroll-container">
        {children}
      </div>}
    </>
  );
};

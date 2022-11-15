import styles from './Subscription.module.css';
import cn from 'classnames';
import { BaseButton } from '../../../ui/button/BaseButton';
import { BaseLink } from '../../../ui/link/BaseLink';
import Image from 'next/image'
import newspaper from '../../../../public/newspaper.svg'
import React, { useState } from 'react';
import { serviceAdvantage } from './Subscription.props';
import Link from 'next/link';
import { data } from '../../services/choose/types';

export const Subscription = (): JSX.Element => {
  const [active, setActive] = useState(0)

  return (
    <section className={styles.subscription}>
      <div className="container">
        <div className={styles.title}>Choose your services</div>
        <div className={styles.description}>
          / Our clients believe in the value of our work. They trust that we’ll
          do everything in our power to deliver value that’s many times greater
          than what they pay /
        </div>

        <div className={styles.controls}>
          <ul>
            <li>
              <BaseButton appearance={active === 0 ? 'primary' : 'dark'} onClick={() => setActive(0)}>Speculator's Digest</BaseButton>
            </li>
            <li>
              <BaseButton onClick={() => setActive(1)} appearance={active === 1 ? 'primary' : 'dark'}>My Take</BaseButton>
            </li>
            <li>
              <BaseButton appearance={active === 2 ? 'primary' : 'dark'} onClick={() => setActive(2)} >
                The Independent Speculator
              </BaseButton>
            </li>
          </ul>
        </div>

        {data?.map((el, id) => (
          <>
            {id === active && <div className={cn('wrapper-grid', styles.wrapperInfo)}>
              <div className={styles.info}>
                <div className={cn('wrapper-grid', styles.subscribtionInfo)}>
                  <div className="img">
                    <Image src={el.image} height={46} width={36} alt="Newspapper" />
                  </div>
                  <div className={styles.wrapperTitle}>
                    <div className={styles.t1}>{el.subtitle}</div>
                    <div className={styles.t2}>{el.title}</div>
                  </div>
                </div>

                <div className={styles.pointsDescription}>
                  <div className={styles.desc}>
                    {el.desc}
                  </div>

                  <div className={styles.list}>
                    <ul>
                      {el.plus.map(advantage => (
                        <li key={advantage}>{advantage}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.subscribeControls}>
                <div className={styles.wr}>

                  {id === 0 && <div className={styles.price}>Free</div>}

                  {id === 1 && <div>
                    <p className={styles.time}>$ 50 monthly</p>
                    <div className={styles.line}></div>
                    <p className={styles.prices}>$ 600</p>
                    <p className={styles.time}>$ 500 yearly</p>
                  </div>}

                  {id === 2 && <div>
                    <p className={styles.time}>$ 1000 qtr</p>
                    <div className={styles.line}></div>
                    <p className={styles.prices}>$ 4000</p>
                    <p className={styles.time}>$ 3000 yearly</p>
                  </div>}
                  <BaseLink arrow className={styles.link}>
                    Subscribe
                  </BaseLink>
                </div>
              </div>
            </div>}
          </>
        ))}

        <div className={styles.question}>
          <Link href={'/'}>
            <a>Got Questions?</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

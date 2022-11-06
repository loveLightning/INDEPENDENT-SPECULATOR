import styles from './Subscription.module.css';
import cn from 'classnames';
import { BaseButton } from '../../../ui/button/BaseButton';
import { BaseLink } from '../../../ui/link/BaseLink';
import Image from 'next/image'
import newspaper from '../../../../public/newspaper.svg'
import React from 'react';
import { serviceAdvantage } from './Subscription.props';
import Link from 'next/link';

export const Subscription = (): JSX.Element => {
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
              <BaseButton>Speculator's Digest</BaseButton>
            </li>
            <li>
              <BaseButton appearance="dark">My Take</BaseButton>
            </li>
            <li>
              <BaseButton appearance="dark">
                The Independent Speculator
              </BaseButton>
            </li>
          </ul>
        </div>

        <div className={cn('wrapper-grid', styles.wrapperInfo)}>
          <div className={styles.info}>
            <div className={cn('wrapper-grid', styles.subscribtionInfo)}>
              <div className="img">
              <Image src={newspaper} height={46} width={36} alt="Newspapper" />
              </div>
              <div className={styles.wrapperTitle}>
                <div className={styles.t1}>EDUCATION</div>
                <div className={styles.t2}>Speculator's Digest</div>
              </div>
            </div>

            <div className={styles.pointsDescription}>
              <div className={styles.desc}>
                A free online educational service for investors who want to
                become top performing speculators.
              </div>

              <div className={styles.list}>
                <ul>
                  {serviceAdvantage?.map(advantage => (
                    <li key={advantage.id}>{advantage.desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.subscribeControls}>
            <div className={styles.price}>Free</div>

            <BaseButton appearance="default" className={styles.btn}>
              Subscribe monthly
            </BaseButton>
            <BaseButton
              appearance="dark"
              className={cn(styles.btn, styles.earlyBtn)}
            >
              Subscribe yearly
            </BaseButton>

            <BaseLink arrow className={styles.link}>
              Subscribe
            </BaseLink>
          </div>
        </div>

        <div className={styles.question}>
          <Link href={'/'}>
            <a>Got Questions?</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

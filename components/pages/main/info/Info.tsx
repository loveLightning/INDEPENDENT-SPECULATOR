import { InfoProps } from './Info.props';
import styles from './Info.module.css';
import cn from 'classnames';
import { BaseLink } from '../../../ui/link/BaseLink';
import Link from 'next/link';
import { dataSocialNetworks } from './Info.interface';
import Image from 'next/image'

export const Info = ({ socialNetworks }: InfoProps): JSX.Element => {
  return (
    <section className={styles.info}>
      <div className={cn('container', styles.infoContainer)}>
        <div className={cn('wrapper-grid', styles.wrapper)}>
          <div className={styles.content}>
            <div className={styles.name}>INDEPENDENT SPECULATOR...</div>
            <div className={styles.description}>
              ...Discipline. Diligence. Results.
            </div>
            <div className={styles.goals}>
              Our goal is to achieve extraordinary gains for ourselves and those willing and able to take the risks and
              apply the discipline needed to speculate successfully.
            </div>
            <div className={styles.controls}>
              <BaseLink
                href={socialNetworks.facebook}
                appearance="default"
                arrow
                className={styles.servicesButton}
              >
                View Services
              </BaseLink>
              <Link href={'/'}>
                <a className={styles.faq}>
                  FAQ
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.socialNetworks}>
            <ul>
              {dataSocialNetworks?.map(social => (
                <li key={social.id}>
                  <Link href={social.path}>
                    <a>
                      <Image src={social.src} alt={social.title} priority />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

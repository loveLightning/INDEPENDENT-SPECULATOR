import { FooterProps, socialDark } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { footerLinks } from './Footer.props';
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../public/logo-dark.svg'

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <div {...props} className={styles.footer}>
      <div className="container">
        <div className={cn('wrapper-grid', styles.wrapper)}>
          <div className={styles.logo}>
            <Image src={logo} alt="Logo" />
          </div>
          <div className={cn(styles.column, styles.company)}>
            <div className={styles.title}>Company</div>
            <ul className={styles.list}>
              {footerLinks?.map(link => (
                <li key={link.id}>
                  <Link href={link.path}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <div className={styles.title}>Account</div>
            <ul className={styles.list}>
              <li>
                <Link href={'/login'}>
                  <a>Log in</a>
                </Link>
              </li>
              <li>
                <Link href={'/services'}>
                  <a>Become subscriber</a>
                </Link>
              </li>
              <li>
                <Link href={'/affiliate'}>
                  <a>Affiliate</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <div className={styles.title}>Legal</div>
            <ul className={styles.list}>
              <li>
                <Link href={'/terms-and-conditions'}>
                  <a href="#">Terms & Conditions</a>

                </Link>
              </li>
              <li>
                <Link href={'/privacy-policy'}>
                  <a href="#">Privacy policy</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <div className={styles.title}>Louis James LLC</div>
            <ul className={styles.list}>
              <li>
                <span>
                  P.O. Box 16060, San Juan,
                  <br /> PR, USA, 00908
                </span>
              </li>
              <li>
                <span>+1 833-SPECUL8 (773 2858)</span>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <div className={styles.title}>Louis James LLC</div>
            <ul className={styles.socials}>
              {socialDark.map((image, id) => (
                <li className={styles.image} key={image.id}>
                  <Link href={image.path}>
                    <a>
                      {id === 0 && <Image height={35} width={35} src={image.src} alt={image.title}></Image>}
                      {id === 2 && <Image width={25} src={image.src} alt={image.title}></Image>}
                      {id !== 2 && id !== 0 && <Image src={image.src} alt={image.title}></Image>}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

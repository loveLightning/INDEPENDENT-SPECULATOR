import { GuestHeaderProps } from './GuestHeader.props';
import styles from './GuestHeader.module.css';
import cn from 'classnames';
import { BaseLink } from '../ui/link/BaseLink';
import { dataMenu } from './GuestHeader.props';
import Link from 'next/link';
import logo from '../../public/logo-small.svg'
import search from '../../public/search.svg'
import Image from 'next/image'
import { NavLink } from '../nav-link/nav-link';

export const GuestHeader = ({ ...props }: GuestHeaderProps): JSX.Element => {
  return (
    <div {...props} className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className="logo">
            <Link href={'/'}>
              <a>
                <Image src={logo} alt="logo" className={styles.logo} />
              </a>
            </Link>
          </div>

          <nav className={styles.menu}>
            <ul>
              {dataMenu?.map(item => (
                <li key={item.id}>
                  <NavLink href={item.path}>
                    <a>{item.title}</a>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.controls}>
            <button className={cn('btn', styles.search)}>
              <Image src={search} alt="search" className={styles.logo} />
            </button>
            <BaseLink path='/' appearance="dark" className={styles.btnLogIn}>
              Log In
            </BaseLink>
            <BaseLink path='/' appearance="primary">
              Become a subscriber
            </BaseLink>
          </div>
        </div>
      </div>
    </div>
  );
};

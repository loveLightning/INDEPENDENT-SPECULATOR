import { FunctionComponent } from 'react';
import { GuestHeader } from '../components/headers/GuestHeader';
import { GuestLayoutProps } from './GuestLayout.props';
import cn from 'classnames';
import styles from './GuestLayout.module.css';
import { Footer } from '../components/footer/Footer';

export const GuestLayout = ({ children }: GuestLayoutProps): JSX.Element => {
  return (
    <div id="main-container" className={cn(styles.wrapper)}>
      <GuestHeader />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export const GuestHeaderOnlyLayout = ({
  children,
}: GuestLayoutProps): JSX.Element => {
  return (
    <div className={cn('wrapper-grid', styles.wrapper)}>
      <GuestHeader />
      <div className="content">{children}</div>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <GuestLayout>
        <Component {...props} />
      </GuestLayout>
    );
  };
};

export const withHeaderOnlyLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <GuestHeaderOnlyLayout>
        <Component {...props} />
      </GuestHeaderOnlyLayout>
    );
  };
};

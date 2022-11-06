import { ContactWrapperProps } from './ContactWrapper.props';
import cn from 'classnames';
import styles from './ContactWrapper.module.css';
import telegram from '../../../../public/teleg.svg'
import location from '../../../../public/location.svg'
import Image from 'next/image';

export const ContactWrapper = ({
  children,
}: ContactWrapperProps): JSX.Element => {
  return (
    <div className="container">
      <div className={cn('wrapper-grid', styles.wrapper)}>
        <div className={styles.info}>
          <div className={styles.title}>
            Contact <span>us</span>
          </div>
          <div className={styles.description}>
            We appreciate your questions and feedback.
            <br />
            <br /> Note that even though we read all incoming messages, we can’t
            guarantee a reply, especially if your question is related to
            individual companies or you seek personal investment advice.
            However, you may find the answer in the next issues of the
            publication(s) you subscribe to. We do respond to all customer
            service related messages (subscriptions, payment issues, etc.). Note
            also that our messages get blocked sometimes, so we ask for your
            phone number as a back-up form of contact. <br />
            <br />
            <span>Thank you.</span>
          </div>
        </div>
        {children}
      </div>
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <Image src={location} alt='Location' />
          <p>P.O. Box 16060, San Juan, PR, USA, 00908</p>
        </div>
        <div className={styles.inner}>
          <Image src={telegram} alt='Location' />
          <p>info@independentspeculator.com</p>
        </div>
      </div>
    </div>
  );
};

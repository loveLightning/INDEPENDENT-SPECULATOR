import styles from './Benefits.module.css';
import cn from 'classnames';
import { benefitsData } from './Benefits.props';

export const Benefits = (): JSX.Element => {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={cn('wrapper-grid', styles.wrapper)}>
          <div className={styles.title}>Benefits</div>
          {benefitsData?.map(benefit => (
            <div key={benefit.id} className={styles.item}>
              <div className={styles.content}>
                <div className={styles.count}>{benefit.count}</div>
                <div className={styles.stat}>{benefit.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { SectionHeaderProps } from './SectionHeader.props';
import cn from 'classnames';
import styles from './SectionHeader.module.css';
import { BaseLink } from '../../../ui/link/BaseLink';
import { Fragment, useCallback } from 'react';

export const SectionHeader = ({
  name,
  title,
  seeAllLink = '',
}: SectionHeaderProps): JSX.Element => {
  
  return (
    <Fragment>
      <div className={styles.name}>/ {name} /</div>
      <div className={cn('wrapper-grid', styles.wrapperTitle)}>
        <div className={styles.title}>{title}</div>
        {seeAllLink && (
          <BaseLink
            href="#"
            arrow
            appearance="ghost"
            border
            className={styles.seeAll}
          >
            See All
          </BaseLink>
        )}
      </div>
    </Fragment>
  );
};

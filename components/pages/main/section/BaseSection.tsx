import { BaseSectionProps } from './BaseSection.props';
import cn from 'classnames';
import styles from './BaseSection.module.css';
import { SectionHeader } from './SectionHeader';

export const BaseSection = ({
  children,
  name,
  title,
  seeAllLink = '',
  withContainer = true,
}: BaseSectionProps): JSX.Element => {
  return (
    <div className={cn('wrapper-grid', styles.wrapper)}>
      <div className={cn('container')}>
        <SectionHeader name={name} title={title} seeAllLink={seeAllLink} />
      </div>

      <div
        className={cn({
          ['container']: withContainer,
        })}
      >
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

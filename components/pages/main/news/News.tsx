import { Fragment } from 'react';
import { NewsItem } from './NewsItem';
import { SectionHeader } from '../section/SectionHeader';
import styles from './News.module.css';
import cn from 'classnames';
import { dataPosts } from './News.props';

export const News = (): JSX.Element => {
  return (
    <Fragment>
      <div className={cn('container', styles.newsSection)}>
        <SectionHeader
          name="Speculator’s digest"
          title="What’s New"
          seeAllLink="#"
        ></SectionHeader>
      </div>

      <div className={styles.items}>
        {dataPosts?.map(post => (
          <NewsItem key={post.id} />
        ))}
      </div>
    </Fragment>
  );
};

import { ReactNode } from 'react';

export interface BaseSectionProps {
  name: string;
  title: string;
  children: ReactNode;
  seeAllLink?: string;
  withContainer?: boolean;
}

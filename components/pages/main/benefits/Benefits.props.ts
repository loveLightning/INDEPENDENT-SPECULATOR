import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Stats } from './Benefits.interface';

export interface BenefitsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  stats: Stats;
}

interface IBenefitsData {
  id: number
  title: string
  count: string
}

export const benefitsData: IBenefitsData[] = [
  {
    id: 0,
    title: 'Countries',
    count: '66 +'
  },
  {
    id: 1,
    title: 'Years',
    count: '16 +'
  },
  {
    id: 2,
    title: 'Realized Gain',
    count: '73.6%'
  }
]
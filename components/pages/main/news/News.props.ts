import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface NewsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export interface IDataPosts {
  id: number
}

export const dataPosts: IDataPosts[] = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
]

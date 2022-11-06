import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { SocialNetworks } from './Info.interface';

export interface InfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  socialNetworks: SocialNetworks;
}

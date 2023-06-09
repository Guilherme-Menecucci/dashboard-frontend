import { IconType } from 'react-icons/lib';
import { NavLinkItemProps } from '../NavLinkItem/index.d';

export interface NavIconItemProps extends Omit<NavLinkItemProps, 'children'> {
  Icon: IconType;
  title: string;
}

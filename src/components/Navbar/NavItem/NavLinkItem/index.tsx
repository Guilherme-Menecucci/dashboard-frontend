import React, { forwardRef } from 'react';

import NavItem from '../NavItem';
import { NavLinkItemProps } from './index.d';

const NavLinkItem = forwardRef<HTMLLIElement, NavLinkItemProps>(({ href, ...props }, ref) => (
  <NavItem {...props} ref={ref}>
    <a href={href}>{props.children}</a>
  </NavItem>
));

NavLinkItem.displayName = 'NavLinkItem';

export default NavLinkItem;

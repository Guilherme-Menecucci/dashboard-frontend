import { forwardRef } from 'react';

import Typography from '~@components/Typography';
import NavLinkItem from '../NavLinkItem';
import NavItem from '../NavItem';
import { NavIconItemProps } from './index.d';

const NavIconItem = forwardRef<HTMLLIElement, NavIconItemProps>((props, ref) => {
  const { Icon, title, href, active, className, isHover = true } = props;

  const Nav = href ? NavLinkItem : NavItem;

  return (
    <Nav ref={ref} href={href} active={active} isHover={isHover} className={className}>
      <Typography
        component="span"
        variant="heading"
        size="small"
        className="flex aspect-square h-10 items-center justify-center p-1"
      >
        <Icon size="100%" />
      </Typography>
      <Typography
        component="span"
        variant="title"
        size="large"
        className="text-sm lg:hidden lg:text-base group-[.nav-open]/layout:lg:block 2xl:block"
      >
        {title}
      </Typography>
    </Nav>
  );
});

NavIconItem.displayName = 'NavIconItem';

export default NavIconItem;

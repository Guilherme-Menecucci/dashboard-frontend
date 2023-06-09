import { IoGridOutline } from 'react-icons/io5';
import { Api } from '~@types/_api';

const navOptions: Api.TNavOptions = [
  { icon: IoGridOutline, title: 'Overview', href: '/' },
  // { icon: IoPeopleOutline, title: 'User', href: '/user' },
  // { icon: IoDesktopOutline, title: 'Conferences', href: '/conferences' },
  // { icon: IoSettingsOutline, title: 'Settings', href: '/settings' },
];

export { navOptions };

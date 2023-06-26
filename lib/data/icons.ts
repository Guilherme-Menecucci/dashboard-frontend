import {
  IoGridOutline,
  IoPeopleOutline,
  IoDesktopOutline,
  IoSettingsOutline,
  IoKeyOutline,
  IoPersonOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoMailOutline,
  IoPeopleCircleOutline,
} from 'react-icons/io5/';
import { IconType } from 'react-icons/lib';

const iconData: { [x: string]: IconType } = {
  Grid: IoGridOutline,
  People: IoPeopleOutline,
  PeopleCicle: IoPeopleCircleOutline,
  Desktop: IoDesktopOutline,
  Settings: IoSettingsOutline,
  Person: IoPersonOutline,
  Key: IoKeyOutline,
  EyeOff: IoEyeOffOutline,
  Eye: IoEyeOutline,
  Mail: IoMailOutline,
};

export default iconData;

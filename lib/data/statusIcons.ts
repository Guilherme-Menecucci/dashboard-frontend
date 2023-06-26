import {
  IoAlertCircleOutline,
  IoCheckmarkDoneCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from 'react-icons/io5';

import { App } from '~@types/_app';

const statusIcons: App.TIcons = {
  info: IoInformationCircleOutline,
  warning: IoWarningOutline,
  error: IoAlertCircleOutline,
  success: IoCheckmarkDoneCircleOutline,
};

export { statusIcons };

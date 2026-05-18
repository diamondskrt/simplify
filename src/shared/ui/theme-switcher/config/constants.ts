import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react-native';

import type { ITheme } from '~/shared/lib';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const themes: { icon: any; label: ITheme }[] = [
  {
    icon: SunIcon,
    label: 'light',
  },
  {
    icon: MonitorIcon,
    label: 'system',
  },
  {
    icon: MoonIcon,
    label: 'dark',
  },
];

export { themes };

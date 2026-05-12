import { Path } from 'react-native-svg';

import { createIconUI } from '../lib';

const AddIcon = createIconUI({
  path: (
    <>
      <Path d="M12 5V19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M5 12H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  viewBox: '0 0 24 24',
});

AddIcon.displayName = 'AddIcon';

export { AddIcon };

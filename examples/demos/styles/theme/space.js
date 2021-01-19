import { theme } from '@chakra-ui/react';

const customSpace = {
  15: '3.75rem',
  66: '16.5rem',
};

export const pagePadding = 6;
export const space = {
  ...theme.space,
  ...customSpace,
  sideMenuOpenWidth: customSpace[66],
  sideMenuClosedWidth: customSpace[15],
  pagePadding: theme.space[pagePadding],
};

export default space;

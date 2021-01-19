import textStyles from '../textStyles';

const getDisabledTextColor = (colorScheme) => {
  switch (colorScheme) {
    case 'primary.blue':
      return 'gray.300';
    case 'primary.marine':
      return 'gray.400';
    case 'primary.red':
      return 'primary.red.100';
    case 'gray':
      return 'gray.300';
    default:
      return `${colorScheme}.300`;
  }
};

const ButtonStyle = {
  baseStyle: {
    w: '15rem',
    h: '2.5rem',
    ...textStyles.buttonM,
  },
  variants: {
    solid: ({ colorScheme }) => ({
      _disabled: {
        textColor: getDisabledTextColor(colorScheme),
        bg: `${colorScheme}.100`,
      },
    }),
  },
  sizes: {
    sm: {
      w: '6rem',
      h: '2rem',
      ...textStyles.buttonS,
    },
    md: {
      w: '10rem',
      h: '2.5rem',
      ...textStyles.buttonM,
    },
    lg: {
      w: '20rem',
      h: '3rem',
      ...textStyles.button,
    },
  },
};

export default ButtonStyle;

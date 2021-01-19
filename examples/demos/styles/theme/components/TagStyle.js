const TagStyle = {
  baseStyle: {
    label: {
      textStyle: 'caption',
    },
  },
  variants: {
    subtle: ({ colorScheme }) => ({
      container: {
        bg: `${colorScheme}.200`,
      },
    }),
  },
  defaultProps: {
    colorScheme: 'primary.marine',
  },
};

export default TagStyle;

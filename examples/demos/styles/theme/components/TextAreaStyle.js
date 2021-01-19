import textStyles from '../textStyles';

const TextArea = {
  variants: {
    outline: {
      border: '1px solid',
      textColor: 'primary.blue.500',
      _focus: { boxShadow: 'medium', borderColor: 'primary.marine.300' },
      _invalid: { borderColor: 'primary.red.500', boxShadow: null },
      _hover: { borderColor: 'primary.marine.300' },
    },
  },
  sizes: {
    md: { ...textStyles.body },
  },
};
export default TextArea;

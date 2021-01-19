import textStyles from '../textStyles';

const InputStyle = {
  variants: {
    outline: {
      field: {
        border: '1px solid',
        textColor: 'primary.blue.500',
        _focus: { boxShadow: 'medium', borderColor: 'primary.marine.300' },
        _invalid: { borderColor: 'primary.red.500', boxShadow: null },
        _hover: { borderColor: 'primary.marine.300' },
      },
    },
  },
  sizes: {
    md: { field: { ...textStyles.body } },
  },
};
export default InputStyle;

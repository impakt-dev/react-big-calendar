import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import textStyles from './textStyles';
import shadows from './shadows';
import {
  ButtonStyle as Button,
  InputStyle as Input,
  FormLabelStyle as FormLabel,
  TextareaStyle as Textarea,
  SelectStyle as Select,
  NumberInputStyle as NumberInput,
  TagStyle as Tag,
} from './components';
import SessionStatusCard from './SessionStatusCard';
import space from './space';

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  styles: {
    global: () => ({
      'html, body': {
        color: colors.gray[900],
        bg: colors.secondary.alice[100],
      },
      p: {
        ...textStyles.body,
      },
    }),
  },
  textStyles,
  shadows,
  colors,
  components: {
    Button,
    Input,
    FormLabel,
    Textarea,
    Select,
    NumberInput,
    Tag,
    SessionStatusCard,
  },
  space,
});

export default theme;

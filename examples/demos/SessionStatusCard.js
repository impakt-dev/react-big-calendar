import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  Button,
} from '@chakra-ui/react';

export const SessionRating = ({ rate }) => {
  const styles = useStyles();

  return (
    <SimpleGrid sx={styles.action} spacing={2}>
      {[...Array(Math.floor(rate / 20))].map((_, index) => '*')}
    </SimpleGrid>
  );
};

export const SessionButton = ({ text, onClick }) => {
  const styles = useStyles();

  return (
    <Box sx={styles.action}>
      <Button bgColor="primary.red.500" color="white" size="sm" onClick={onClick}>
        {text}
      </Button>
    </Box>
  );
};

const SessionStatusCard = ({ sessionName, sessionTime, variant, size, children }) => {
  const styles = useMultiStyleConfig('SessionStatusCard', { variant, size });

  return (
    <StylesProvider value={styles}>
      <Flex sx={styles} align="center" justify="space-between" position="relative">
        <Box sx={styles.line} />
        <Box>
          <Box sx={styles.name}>{sessionName}</Box>
          {size !== 'sm' && <Box sx={styles.time}>{sessionTime}</Box>}
        </Box>
        {size === 'lg' && children}
      </Flex>
    </StylesProvider>
  );
};

export default SessionStatusCard;
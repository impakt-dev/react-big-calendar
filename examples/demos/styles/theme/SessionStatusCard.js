import textStyles from './textStyles';

const SessionStatusCard = {
  parts: ['name', 'time', 'action', 'line'],
  baseStyle: {
    // height: '100px',
    borderRadius: '.25rem',
    name: {
      ...textStyles.buttonM,
    },
    time: {
      ...textStyles.captionS,
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    line: {
      position: 'absolute',
      left: '0%',
      right: '99.8%',
      top: '0%',
      bottom: '0%',
      borderRadius: '1rem 0rem 0 rem 1rem',
    },
  },
  sizes: {
    sm: {
      card: {
        py: 2,
        px: 1,
      },
      name: {
        ...textStyles.bodyS,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '119px',
      },
    },
    md: {
      name: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '111px',
      },
    },
    lg: {
      card: {
        my: 0,
        mx: 0,
        height: '300px'
      },
      name: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    },
  },
  variants: {
    canceled: {
      backgroundColor: 'primary.red.100',
      color: 'primary.red.300',
      borderColor: 'primary.red.500',
      p: '8px',
      line: {
        backgroundColor: 'primary.red.500',
      },
    },
    addSession: {
      backgroundColor: 'primary.blue.100',
      color: 'primary.blue.500',
      borderColor: 'primary.blue.100',
      p: '8px',
      line: {
        backgroundColor: 'primary.blue.300',
      },
    },
    next: {
      backgroundColor: 'primary.marine.100',
      color: 'primary.marine.700',
      borderColor: 'primary.marine.500',
      p: '8px',
      line: {
        backgroundColor: 'primary.marine.500',
      },
    },
    upcoming: {
      backgroundColor: 'primary.blue.100',
      color: 'primary.blue.500',
      borderColor: 'primary.blue.300',
      p: '8px',
      line: {
        backgroundColor: 'primary.blue.300',
      },
    },
    completed: {
      backgroundColor: 'secondary.alice.300',
      color: 'secondary.alice.700',
      borderColor: 'secondary.alice.700',
      p: '8px',
      line: {
        backgroundColor: 'secondary.alice.700',
      },
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'completed',
  },
};

export default SessionStatusCard;

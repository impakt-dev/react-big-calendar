import textStyles from './textStyles';

const SessionStatusCard = {
  parts: ['name', 'time', 'action', 'line'],
  baseStyle: {
    p: '8px',
    height: '100%',
    width: '100%',
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
      borderRadius: '1rem 0rem 0rem 1rem',
    },
  },
  sizes: {
    sm: {
      p: "5px",
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
      line: {
        backgroundColor: 'primary.red.500',
      },
    },
    addSession: {
      backgroundColor: 'primary.blue.100',
      color: 'primary.blue.500',
      borderColor: 'primary.blue.100',
      line: {
        backgroundColor: 'primary.blue.300',
      },
    },
    next: {
      backgroundColor: 'primary.marine.100',
      color: 'primary.marine.700',
      borderColor: 'primary.marine.500',
      line: {
        backgroundColor: 'primary.marine.500',
      },
    },
    upcoming: {
      backgroundColor: 'primary.blue.100',
      color: 'primary.blue.500',
      borderColor: 'primary.blue.300',
      line: {
        backgroundColor: 'primary.blue.300',
      },
    },
    completed: {
      backgroundColor: 'secondary.alice.300',
      color: 'secondary.alice.700',
      borderColor: 'secondary.alice.700',
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

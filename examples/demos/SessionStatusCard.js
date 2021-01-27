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
import dayjs from 'dayjs'

const canJoinSession = (variant, startTime, endTime) => {
  const starTimeDiff = dayjs(startTime).diff(dayjs(), 'm')
  const endTimeDiff = dayjs(endTime).diff(dayjs(), 'm')
  return (starTimeDiff <= 15 && endTimeDiff > 15) || variant !== 'next'
}

const DeleteSVG = ({ onClick }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
<path fillRule="evenodd" clipRule="evenodd" d="M2.8562 4C2.8562 3.58579 3.176 3.25 3.57049 3.25H16.4276C16.8221 3.25 17.1419 3.58579 17.1419 4V17.5C17.1419 18.7426 16.1825 19.75 14.9991 19.75H4.99906C3.81559 19.75 2.8562 18.7426 2.8562 17.5V4ZM4.99906 18.25H14.9991C15.3935 18.25 15.7133 17.9142 15.7133 17.5V4.75H4.28477V17.5C4.28477 17.9142 4.60457 18.25 4.99906 18.25Z" fill="#F84153"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.85711 7.75C8.2516 7.75 8.57139 8.08579 8.57139 8.5V14.5C8.57139 14.9142 8.2516 15.25 7.85711 15.25C7.46262 15.25 7.14282 14.9142 7.14282 14.5V8.5C7.14282 8.08579 7.46262 7.75 7.85711 7.75Z" fill="#F84153"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.1428 7.75C12.5372 7.75 12.857 8.08579 12.857 8.5V14.5C12.857 14.9142 12.5372 15.25 12.1428 15.25C11.7483 15.25 11.4285 14.9142 11.4285 14.5V8.5C11.4285 8.08579 11.7483 7.75 12.1428 7.75Z" fill="#F84153"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 3.58579 0.319797 3.25 0.714286 3.25H19.2857C19.6802 3.25 20 3.58579 20 4C20 4.41421 19.6802 4.75 19.2857 4.75H0.714286C0.319797 4.75 0 4.41421 0 4Z" fill="#F84153"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5.71338 2.5C5.71338 1.25736 6.67277 0.25 7.85624 0.25H12.142C13.3254 0.25 14.2848 1.25736 14.2848 2.5V4C14.2848 4.41421 13.965 4.75 13.5705 4.75H6.42766C6.03318 4.75 5.71338 4.41421 5.71338 4V2.5ZM12.142 1.75H7.85624C7.46175 1.75 7.14195 2.08579 7.14195 2.5V3.25H12.8562V2.5C12.8562 2.08579 12.5364 1.75 12.142 1.75Z" fill="#F84153"/>
</svg>
  )
}

const StarSVG = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M3.0842 15.9383C3.15027 15.9863 3.22524 16.0063 3.3091 15.9983C3.39297 15.9903 3.49335 15.9436 3.61025 15.8582L8.00163 12.4863L12.3854 15.8582C12.5023 15.9436 12.6027 15.9903 12.6865 15.9983C12.7704 16.0063 12.8479 15.9863 12.9191 15.9383C12.9851 15.8849 13.0283 15.8141 13.0487 15.726C13.069 15.6379 13.0588 15.5164 13.0182 15.3616L11.3257 9.94744L15.7323 6.59963C15.8543 6.50886 15.9305 6.42076 15.961 6.33533C15.9915 6.2499 15.994 6.16714 15.9686 6.08705C15.9483 6.00696 15.9013 5.94288 15.8276 5.89483C15.7539 5.84678 15.6383 5.82275 15.4807 5.82275L10.0601 5.83076L8.39045 0.400578C8.34471 0.251075 8.28753 0.146956 8.21891 0.0882224C8.1503 0.0294889 8.07787 0.00012207 8.00163 0.00012207C7.92031 0.00012207 7.84661 0.0294889 7.78054 0.0882224C7.71446 0.146956 7.65601 0.251074 7.60519 0.400578L5.94317 5.83076L0.514931 5.82275C0.362453 5.82275 0.249365 5.84678 0.175667 5.89483C0.101969 5.94288 0.0524137 6.00696 0.0270005 6.08705C0.00666999 6.16714 0.0104819 6.2499 0.0384363 6.33533C0.0663907 6.42076 0.141359 6.50886 0.263342 6.59963L4.66998 9.94744L2.98509 15.3616C2.93935 15.5164 2.92664 15.6379 2.94697 15.726C2.9673 15.8141 3.01305 15.8849 3.0842 15.9383H3.0842Z" fill="#8FA7BD"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

  )
}


export const SessionRating = ({ rate }) => {
  const styles = useStyles();
  let renderStars = Array(Math.ceil(rate / 20)).fill({ })
  return (
    <SimpleGrid sx={styles.action} spacing={2}>
      {renderStars.map((_, index) => (
          <StarSVG key={index.toString()} />
        ))}
    </SimpleGrid>
  );
};

export const SessionAction = ({ children }) => {
  const styles = useStyles();

  return (
    <Box sx={styles.action}>
      {children}
    </Box>
  );
};

const BTNCOLORS = {
  next: 'primary.red.500',
  upcoming: 'primary.marine.500'
}

const Actions = ({ variant, btnColor, rating, onClick }) => {
  switch (variant) {
    case 'next':
      return (<SessionAction>
        <Button bgColor={btnColor} color="white" size="sm" onClick={onClick}>
        Join Now
      </Button>
      </SessionAction>)
    case 'addSession':
      return (<SessionAction>
        <DeleteSVG onClick={onClick} />
      </SessionAction>)
    case 'upcoming':
      return (<SessionAction>
        <Button bgColor={btnColor} color="white" size="sm" onClick={onClick}>
        Book Now
      </Button>
      </SessionAction>)
    case 'completed':
      return <SessionRating rate={rating} />
    default:
      return null
  }
}

const SessionStatusCard = ({ sessionName, startTime, endTime, variant, size, rating, onClick }) => {
  const styles = useMultiStyleConfig('SessionStatusCard', { variant, size });
  const sessionTime = `${dayjs(startTime).format('hh:mm A')} - ${dayjs(endTime).format('hh:mm A')}`
  const canJoin = canJoinSession(variant, startTime, endTime)
  // console.log(sessionName, startTime, endTime, variant, size, rating)
  return (
    <StylesProvider value={styles}>
      <Flex sx={styles} align="center" justify="space-between" position="relative">
        <Box sx={styles.line} />
        <Box>
          <Box sx={styles.name}>{sessionName}</Box>
          {size !== 'sm' && <Box sx={styles.time}>{sessionTime}</Box>}
        </Box>
        {(size === 'lg' && canJoin) && <Actions variant={variant} btnColor={BTNCOLORS[variant]} rating={rating} onClick={onClick} />}
      </Flex>
    </StylesProvider>
  );
};

export default SessionStatusCard;
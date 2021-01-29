const now = new Date()

export default [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
    variant: 'completed',
    rating: 40,
    handleClick: () => {},
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
    variant: 'canceled',
    handleClick: () => {},
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
    variant: 'addSession',
    handleClick: () => {},
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
    variant: 'canceled',
    handleClick: () => {},
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
    variant: 'completed',
    rating: 40,
    handleClick: () => {},
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
    variant: 'canceled',
    handleClick: () => {},
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
    variant: 'addSession',
    handleClick: () => {},
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 14,
    start: new Date(new Date().setHours(new Date().getHours() - 10 * 48)),
    end: new Date(new Date().setHours(new Date().getHours() - 10 * 44)),
    title: 'Yoga Course 101 - Clean Your Mind from morning to night',
    variant: 'completed',
    rating: 40,
    handleClick: () => {},
  },
  {
    id: 140,
    title: 'Yoga Course 101 - Clean Your Mind from night to morninggg',
    start: new Date(new Date().setHours(new Date().getHours() + 0.5 )),
    end: new Date(new Date().setMinutes(new Date().getMinutes() + 2)),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 140,
    title: 'Yoga Course 101 - Clean Your Mind from night to morningzzz',
    start: new Date(new Date().setHours(new Date().getHours() + 3 )),
    end: new Date(new Date().setMinutes(new Date().getMinutes() + 4)),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 140,
    title: 'Yoga Course 101 - Clean Your Mind from night to morningxxx',
    start: new Date(new Date().setHours(new Date().getHours() + 4 )),
    end: new Date(new Date().setMinutes(new Date().getMinutes() + 5)),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 141,
    title: 'Yoga Course 101 - Clean Your Mind from night to morning 2x',
    start: new Date("Thu Jan 28 2021 10:00:00 GMT+0100 (GMT+01:00)"),
    end: new Date("Thu Jan 28 2021 12:30:00 GMT+0100 (GMT+01:00)"),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 145,
    title: 'Yoga Course 101 - Clean Your Mind from night to morning x',
    start: new Date(new Date().setHours(new Date().getHours() + 7)),
    end: new Date(new Date().setHours(new Date().getHours() + 10)),
    variant: 'completed',
    rating: 40,
    handleClick: () => {}
  },
  // {
  //   id: 147,
  //   title: 'Yoga Course 101 - Clean Your Mind from night to morning',
  //   start: new Date(new Date().setHours(new Date().getHours() + 2)),
  //   end: new Date(new Date().setHours(new Date().getHours() + 3)),
  //   variant: 'next',
  // isLive: true,
  //   handleClick: () => {},
  // },
  { 
    id: 146,
    title: 'Yoga Course 101 - Clean Your Mind from night to morning x',
    start: new Date(new Date().setHours(new Date().getHours() + 48)),
    end: new Date(new Date().setHours(new Date().getHours() + 49)),
    variant: 'completed',
    rating: 40,
    handleClick: () => {}
  },
  { 
    id: 147,
    title: 'Yoga Course 101 - Clean Your Mind from night to morning x',
    start: new Date(new Date().setHours(new Date().getHours() + 96)),
    end: new Date(new Date().setHours(new Date().getHours() + 98)),
    variant: 'canceled',
    handleClick: () => {},
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2015, 3, 14, 15, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
    variant: 'addSession',
    handleClick: () => {},
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 17, 30, 0),
    variant: 'completed',
    rating: 40,
    handleClick: () => {},
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 20, 30, 0),
    variant: 'canceled',
    handleClick: () => {},
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
    variant: 'addSession',
    handleClick: () => {},
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2015, 3, 14, 18, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
]

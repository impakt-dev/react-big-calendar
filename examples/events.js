const now = new Date()

export default [
  {
    id: 0,
    namii: 'All Day Event very long namii',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 1,
    namii: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
    variant: 'completed',
    rating: 40,
    handleClick: () => {},
  },

  {
    id: 2,
    namii: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },

  {
    id: 3,
    namii: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
    variant: 'canceled',
    handleClick: () => {},
  },

  {
    id: 4,
    namii: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 5,
    namii: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 6,
    namii: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
    variant: 'addSession',
    handleClick: () => {},
  },
  {
    id: 7,
    namii: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
    variant: 'canceled',
    handleClick: () => {},
  },
  {
    id: 8,
    namii: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 9,
    namii: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 10,
    namii: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
    variant: 'completed',
    rating: 40,
    handleClick: () => {},
  },
  {
    id: 11,
    namii: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
    variant: 'canceled',
    handleClick: () => {},
  },
  {
    id: 12,
    namii: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
    variant: 'addSession',
    handleClick: () => {},
  },
  {
    id: 12.5,
    namii: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 13,
    namii: 'Multi-day Event',
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
    namii: 'Yoga Course 101 - Clean Your Mind from morning to night',
    variant: 'completed',
    rating: 40,
    handleClick: () => {},
  },
  {
    id: 1402,
    namii: 'Yoga Course 101 - Clean Your Mind from night to morninggg',
    start: new Date(new Date().setHours(new Date().getHours() + 1 )),
    end: new Date(new Date().setMinutes(new Date().getMinutes() + 1.5)),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 1401,
    namii: 'Yoga Course 101 - Clean Your Mind from night to morningzzz',
    start: new Date(new Date().setHours(new Date().getHours() + 3 )),
    end: new Date(new Date().setMinutes(new Date().getMinutes() + 4)),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 1403,
    namii: 'Yoga Course 101 - Clean Your Mind from night to morningxxx',
    start: new Date(new Date().setHours(new Date().getHours() + 4 )),
    end: new Date(new Date().setMinutes(new Date().getMinutes() + 5)),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 141,
    namii: 'Yoga Course 101 - Clean Your Mind from night to morning f',
    start: new Date("Thu Feb 05 2021 10:00:00 GMT+0100 (GMT+01:00)"),
    end: new Date("Thu Feb 05 2021 10:29:00 GMT+0100 (GMT+01:00)"),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 1411,
    namii: 'Yoga Course 101 - Clean Your Mind from night to morning fa',
    start: new Date("Thu Feb 05 2021 11:00:00 GMT+0100 (GMT+01:00)"),
    end: new Date("Thu Feb 05 2021 12:00:00 GMT+0100 (GMT+01:00)"),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 1412,
    namii: 'Yoga Course 101 - Clean Your Mind from night to morning fad',
    start: new Date("Thu Feb 05 2021 12:00:00 GMT+0100 (GMT+01:00)"),
    end: new Date("Thu Feb 05 2021 13:00:00 GMT+0100 (GMT+01:00)"),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 1413,
    namii: 'Yoga Course 101 - Clean Your Mind from night to morning fade',
    start: new Date("Thu Jan 31 2021 13:00:00 GMT+0100 (GMT+01:00)"),
    end: new Date("Thu Jan 31 2021 14:00:00 GMT+0100 (GMT+01:00)"),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 145,
    namii: 'Yoga Course 101 - Clean Your Mind from night to morning x',
    start: new Date(new Date().setHours(new Date().getHours() + 7)),
    end: new Date(new Date().setHours(new Date().getHours() + 10)),
    variant: 'completed',
    rating: 40,
    handleClick: () => {}
  },
  {
    id: 147,
    namii: 'Yoga Course 101 - Clean Your Mind from night to morning',
    start: new Date(new Date().setHours(new Date().getHours() + 2)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    variant: 'next',
  isLive: true,
    handleClick: () => {},
  },
  { 
    id: 146,
    namii: 'Yoga Course 101 - Clean Your Mind from night to morning x',
    start: new Date(new Date().setHours(new Date().getHours() + 48)),
    end: new Date(new Date().setHours(new Date().getHours() + 49)),
    variant: 'completed',
    rating: 40,
    handleClick: () => {}
  },
  { 
    id: 147,
    namii: 'Yoga Course 101 - Clean Your Mind from night to morning x',
    start: new Date(new Date().setHours(new Date().getHours() + 96)),
    end: new Date(new Date().setHours(new Date().getHours() + 98)),
    variant: 'canceled',
    handleClick: () => {},
  },
  {
    id: 16,
    namii: 'Video Record',
    start: new Date(2015, 3, 14, 15, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 17,
    namii: 'Dutch Song Producing',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
    variant: 'addSession',
    handleClick: () => {},
  },
  {
    id: 18,
    namii: 'Itaewon Halloween Meeting',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 17, 30, 0),
    variant: 'completed',
    rating: 40,
    handleClick: () => {},
  },
  {
    id: 19,
    namii: 'Online Coding Test',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 20, 30, 0),
    variant: 'canceled',
    handleClick: () => {},
  },
  {
    id: 20,
    namii: 'An overlapped Event',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
    variant: 'upcoming',
    isAvailable: true,
    handleClick: () => {},
  },
  {
    id: 21,
    namii: 'Phone Interview',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
  {
    id: 22,
    namii: 'Cooking Class',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
    variant: 'addSession',
    handleClick: () => {},
  },
  {
    id: 23,
    namii: 'Go to the gym',
    start: new Date(2015, 3, 14, 18, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
    variant: 'next',
    isLive: true,
    handleClick: () => {},
  },
]

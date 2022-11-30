
let eventGuid = 0
// let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
// let start = new Date().toISOString().replace(/T.*$/, '')
// let end = new Date().toISOString().replace(/T.*$/, '')
const dateStr = "Novemeber 29 2022 18:00:00 (MST)"


export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'The Station Hair Studio',
    startTime: "18:00:00 (MST)",
    endTime: "20:15:00 (MST)",
    daysOfWeek: [1],
    startRecur: (new Date(dateStr)).toISOString(),
    display: 'block',
    backgroundColor: 'red'
  },
  {
    id: createEventId(),
    title: 'DECO',
    startTime: "18:00:00 (MST)",
    endTime: "18:15:00 (MST)",
    daysOfWeek: [1, 3],
    startRecur: (new Date(dateStr)).toISOString(),
    display: 'block',
    backgroundColor: 'green'
  },
  {
    id: createEventId(),
    title: 'Zandi K Denver West',
    startTime: "18:00:00 (MST)",
    endTime: "19:45:00 (MST)",
    daysOfWeek: [2, 5],
    startRecur: (new Date(dateStr)).toISOString(),
    display: 'block',
    backgroundColor: 'blue'
  },
  {
    id: createEventId(),
    title: 'Urban Luxury Salon',
    startTime: "18:00:00 (MST)",
    endTime: "21:30:00 (MST)",
    daysOfWeek: [0, 2, 4],
    startRecur: (new Date(dateStr)).toISOString(),
    display: 'block',
    backgroundColor: 'cyan',
    textColor: 'black'
  },
  {
    id: createEventId(),
    title: 'Pure Power Engineering',
    startTime: "18:00:00 (MST)",
    endTime: "20:00:00 (MST)",
    daysOfWeek: [0],
    startRecur: (new Date(dateStr)).toISOString(),
    display: 'block',
    backgroundColor: 'magenta'
  },
  {
    id: createEventId(),
    title: 'Glosshouz',
    startTime: "18:00:00 (MST)",
    endTime: "20:00:00 (MST)",
    daysOfWeek: [1],
    startRecur: (new Date(dateStr)).toISOString(),
    display: 'block',
    backgroundColor: 'yellow',
    textColor: 'black'
  },
  {
    id: createEventId(),
    title: 'Do The Bang Thing',
    startTime: "18:00:00 (MST)",
    endTime: "22:00:00 (MST)",
    daysOfWeek: [1],
    startRecur: (new Date(dateStr)).toISOString(),
    display: 'block',
    backgroundColor: 'black'
  },
  {
    id: createEventId(),
    title: 'Cardiology Now',
    startTime: "18:00:00 (MST)",
    endTime: "20:30:00 (MST)",
    daysOfWeek: [6],
    startRecur: (new Date(dateStr)).toISOString(),
    display: 'block',
    backgroundColor: 'grey'
  },
  {
    id: createEventId(),
    title: 'Cedar Hair Studio',
    startTime: "18:00:00 (MST)",
    endTime: "20:30:00 (MST)",
    daysOfWeek: [3],
    startRecur: (new Date(dateStr)).toISOString(),
    display: 'block',
    backgroundColor: 'purple'
  },
  {
    id: createEventId(),
    title: 'One 2 One Studio Salon',
    startTime: "18:00:00 (MST)",
    endTime: "20:00:00 (MST)",
    daysOfWeek: [1],
    startRecur: (new Date(dateStr)).toISOString(),
    display: 'block',
    backgroundColor: 'pink',
    textColor: 'black'
  },
]

export function createEventId() {
  return String(eventGuid++)
}





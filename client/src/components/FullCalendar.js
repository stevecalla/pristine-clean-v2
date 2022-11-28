import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

export default class FullCalendarApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        dateClick={this.handleDateClick}
        eventContent={renderEventContent}
        events={[
          { title: "event 1", date: "2022-12-16" },
          { title: "event 2", date: "2022-12-01" },
        ]}
      />
    );
  }
  // the dateClick handler is called whenever the user clicks on a date
  handleDateClick = (parent, arg) => {
    alert(arg.dateStr);
  };
}
// the eventContent event render hook, return React JSX nodes
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
//  formatDate utility prevents need to add another dependency
let str = formatDate(new Date(), {
  month: "long",
  year: "numeric",
  day: "numeric",
});

console.log(str);

import React, { useState, useEffect, useRef } from "react";
import Location from "../pages/Location";

// import { INITIAL_EVENTS } from "../utils/event-utils";

import Auth from "../utils/auth";
import { getUserId } from "../utils/getUserId";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { QUERY_EVENTS } from "../utils/queries";

import FullCalendar, { render } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import momentPlugin from "@fullcalendar/moment";
import moment from "moment";
import "../styles/calendar.css";

const FullCalendarApp = () => {
  // set state of sctive view through day# click
  const [activeView, setActiveView] = useState("dayGridMonth");

  const userId = getUserId();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId },
    skip: !Auth.loggedIn(),
  });

  const [locationPage, setLocationPage] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});

  // const calendarRef = useRef(null);
  const [weekendsVisible] = useState(true);

  useEffect(() => {
    setActiveView("listDay");
  }, [activeView]);

  //SECTION START - - - - - - -
  let rawEvents;
  // let INITIAL_EVENTS;
  // let events;
  const [INITIAL_EVENTS, setINITIAL_EVENTS] = useState(null);
  const [renderCalendar, setRenderCalendar] = useState(true);
  const previousValue = useRef(null);
  //SECTION END - - - - - - - - - - -

  //section START - - - - - -  - -  - -  - -
  // guery events
  const { loading: eventLoad, data: eventData } = useQuery(QUERY_EVENTS);

  let results = [];
  console.log(eventLoad);

  if (!eventLoad) {
    rawEvents = eventData?.events;

    results = rawEvents?.map(event => {
    // events = rawEvents?.map(event => {
      return {
        id: event._id,
        title: event.title,
        startTime: event.startTime,
        endTime: event.endTime,
        daysOfWeek: event.daysOfWeek,
        startRecur: new Date(event.startRecur).toISOString(),
        display: event.display,
        backgroundColor: event.backgroundColor,
        textColor: event.textColor
      };
    })

    console.log({results});
    console.log({INITIAL_EVENTS});
    console.log('initial is valid = ', results !== undefined);
    console.log('prev value = ', {previousValue});
    console.log('prev is valid = ', previousValue.current !== undefined);
    console.log('prev is valid = ', previousValue !== null);
    console.log('length = ', results?.length === previousValue.current?.length)
    console.log('all true = ',
          results !== undefined &&
          previousValue.current !== undefined &&
          previousValue !== null &&
          results?.length === previousValue.current?.length
    );

    if (
      results !== undefined &&
      previousValue.current !== undefined &&
      previousValue !== null &&
      results?.length === previousValue.current?.length )
      {
        console.log('hello')
        console.log(renderCalendar)
      return;
    }

    let eventInfo = {
      event: {
        title: "Cedar Hair Studio",
        start: "2022-12-28T18:00:00-07:00",
        end: "2022-12-28T20:30:00-07:00",
        id: "393233343536373839303132",
        display: "block",
        backgroundColor: "purple",
      },
      view: {
        type: "dayGridMonth",
        dateEnv: {
          timeZone: "local",
          canComputeOffset: true,
          calendarSystem: {},
          locale: {
            codeArg: "en",
            codes: ["en"],
            week: {
              dow: 0,
              doy: 4,
            },
            simpleNumberFormat: {},
            options: {
              direction: "ltr",
              buttonText: {
                prev: "prev",
                next: "next",
                prevYear: "prev year",
                nextYear: "next year",
                year: "year",
                today: "today",
                month: "month",
                week: "week",
                day: "day",
                list: "list",
              },
              weekText: "W",
              weekTextLong: "Week",
              closeHint: "Close",
              timeHint: "Time",
              eventHint: "Event",
              allDayText: "all-day",
              moreLinkText: "more",
              noEventsText: "No events to display",
              buttonHints: {
                prev: "Previous $0",
                next: "Next $0",
              },
              viewHint: "$0 view",
              navLinkHint: "Go to $0",
            },
          },
          weekDow: 0,
          weekDoy: 4,
          weekText: "W",
          weekTextLong: "Week",
          defaultSeparator: " - ",
        },
      },
      timeText: "6p",
      textColor: "",
      backgroundColor: "purple",
      borderColor: "",
      isDraggable: true,
      isStartResizable: false,
      isEndResizable: false,
      isMirror: false,
      isStart: true,
      isEnd: true,
      isPast: false,
      isFuture: true,
      isToday: false,
      isSelected: false,
      isDragging: false,
      isResizing: false,
    };

    renderEventContent(eventInfo);
    setINITIAL_EVENTS(results);
    setRenderCalendar(true);
  }

  console.log(renderCalendar)

  if (INITIAL_EVENTS) {
    previousValue.current = INITIAL_EVENTS;
  }
  //section END - - - - - - - - -  -

  // check for mobile device to set initial view
  window.mobilecheck = function () {
    var check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  function renderEventContent(eventInfo) {
    console.log({ eventInfo });
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i> {eventInfo.event.title}</i>
      </>
    );
  }

  let locations;
  if (!loading) {
    console.log(data);
    locations = data?.me?.locations;
  }
  const handleEventClick = (event) => {
    let eventId = event.event._def.publicId;

    let filteredLocation = locations?.filter(
      (element) => element._id === eventId
    );

    setSelectedLocation(filteredLocation[0]);
    setLocationPage(true);
  };

  if (locationPage) {
    return (
      <Location locationDetails={selectedLocation} selectedPage={"calendar"} />
    );
  }

  // spinner - wait for query to return event data
  // if (!renderCalendar) {
  //   return (
  //     <div className="d-flex justify-content-center">
  //       <div className="lds-hourglass"></div>
  //     </div>
  //   );
  // }

  return (
    <>
      hello
      <div className="cal-app my-3 p-1 shadow border border-secondary rounded-lg">
        <div id="calendar" className="cal-app-main">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
              momentPlugin,
            ]}
            headerToolbar={{
              left: "title",
              center: "",
              right: "prev,next,today",
            }}
            footerToolbar={{
              left: "",
              center: "dayGridMonth,listWeek",
              right: "",
            }}
            buttonText={{
              today: "Today",
              month: "Month",
              list: "Week",
            }}
            titleFormat="MMM-YYYY"
            listDayFormat={{
              day: "numeric",
              weekday: "short",
              month: "short",
              omitCommas: false,
            }}
            navLinkDayClick={activeView}
            slotMinTime="06:00:00"
            initialView={window.mobilecheck() ? "listWeek" : "dayGridMonth"}
            initialDate={moment().format()}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick} //section
            navLinks={true} // allows for navigation to day-view of selected date
          />
        </div>
      </div>
    </>
  );
};

export default FullCalendarApp;

import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
import '../styles/calendar.css'
// import FullCalendar, { formatDate } from '@fullcalendar/react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import momentPlugin from '@fullcalendar/moment'
import { INITIAL_EVENTS } from '../utils/event-utils'

//section
import Auth from "../utils/auth";
import { getUserId } from "../utils/getUserId";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Location from "../pages/Location";

const FullCalendarApp = () => { 
  const [ weekendsVisible ] = useState(true);

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar


    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        // id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  function renderEventContent(eventInfo) {

    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{' '}{eventInfo.event.title}</i>
      </>
    )
  };

  //section
  const userId = getUserId();

  // console.log(!Auth.loggedIn());

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId },
    skip: !Auth.loggedIn(),
  });

  let locations;

  if (!loading) {
    locations = data?.me?.locations;
    console.log(locations)
  }

  const [locationPage, setLocationPage] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});

  const handleEventClick = (event) => {
    console.log(locations)

    // TODO: Nav.Link to location page
    let eventId = event.event._def.publicId;
    console.log(event)
    console.log(eventId)

    // console.log('info click')
    // console.log(event)
    // console.log(event.currentTarget.getAttribute("data-location"));
    // let locationId = event.currentTarget.getAttribute("data-location");

    // console.log(locations.map((element) => console.log(element._id, locationId)));

    let filteredLocation = locations?.filter(
      // (element) => element._id === locationId
      (element) => element._id === eventId
    );

    console.log(filteredLocation)
    // console.log("selected location = ", filteredLocation[0]);
    setSelectedLocation(filteredLocation[0]);
    setLocationPage(true);
  };

  // if (locationPage) {
  //   // console.log("yes 1");
  //   return <Location locationDetails={selectedLocation}/>;
  // }

  if (locationPage) {
    // console.log("yes 1");
    return <Location locationDetails={selectedLocation} selectedPage={"calendar"} />;
  }
  
  return (
    <div className='cal-app my-3 p-1 shadow border border-secondary rounded-lg'>
      <div id="calendar" className='cal-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, momentPlugin]}
          headerToolbar={{
            left: 'title',
            center: '',
            right: 'prev,next,today,dayGridMonth',
          }}
          titleFormat='MMM-YY'
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          // eventClick={handleEventClick}
          eventClick={handleEventClick} //section
          // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          navLinks={true} // allows for navigation to day-view of selected date
        /* you can update a remote database when these fire:
        eventAdd={function () { }}
        eventChange={function () { }}
        eventRemove={function () { }}
        */
        />
      </div>
    </div>
  )
  }

  export default FullCalendarApp;
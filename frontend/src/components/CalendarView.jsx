import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";

function CalendarView({ events }) {

    const navigate = useNavigate();

    const calendarEvents = events.map(event => ({

        id: event.id,

        title: event.title,

        start: event.date,

        color:
            event.status === "FULL"
                ? "red"
                : event.status === "CANCELLED"
                ? "gray"
                : "green"

    }));


    return (

        <FullCalendar

            plugins={[
                dayGridPlugin,
                interactionPlugin
            ]}

            initialView="dayGridMonth"

            events={calendarEvents}

            eventClick={(info)=>{

                navigate(`/events/${info.event.id}`);

            }}

        />

    );

}

export default CalendarView;
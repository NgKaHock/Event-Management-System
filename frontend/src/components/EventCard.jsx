import {Link} from "react-router-dom";
import StatusBadge from "./StatusBadge";

function EventCard({event}){

    const formattedDate = new Date(event.date).toLocaleDateString(
        "en-GB",
        {
            day : "numeric",
            month : "short",
        }

    )

    return(

        <div>


            <h3>{event.title}</h3>

            <p>{formattedDate}</p>
            <p>{event.location}</p>
            <StatusBadge status = {event.status}/>

            <br />

            <Link to = {`/events/${event.id}`}> View Details </Link>

            <hr />

        </div>

    );
}

export default EventCard;
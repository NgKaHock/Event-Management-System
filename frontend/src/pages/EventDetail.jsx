import { useEffect, usestate } from "react";
import {useParams} from "react-router-dom";
import API from "../api";

function EventDetail(){

    const {id} = useParams();

    const [event, setEvent] = useState(null);

    useEffect(()=>{
        API.get(`events/${id}/`)
            .then((response)=>{
                setEvent(response.data);
            })
            .catch((error)=> {
                console.error(error);
            });

    },[id]);

    if(!event){

        return <h2>Loading......</h2>;
    }

    return(
        <div>

            <h1>{event.title}</h1>

            <p>Date:{event.date}</p>
            <p>Time: {event.start_time} - {event.end_time}</p>
            <p>Location: {event.location}</p>
            <p>Status:{event.status}</p>
            <p>
                Capacity :
                {" "}
                {event.registered_count}
                /
                {event.capacity}
            </p>
            <p>{event.description}</p>

            <button>Register Now!!</button>

        </div>

    );

}

export default EventDetail;


import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import API from "../api";

function Home(){

    const [events, setEvents] = useState([]);

    useEffect(()=>{

        API.get("events/")
            .then((response)=>{
                setEvents(response.data);
            })
            .catch((error)=>{
                console.log(error);
            })

        },[]);

        return(
            <div>
                <h1>
                    Talentbank Career Fair Calendar 
                </h1>
            {
                events.map((event) => (

            <div key={event.id}>

                <h2>{event.title}</h2>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>

                <Link to={`/events/${event.id}`} >
                    View Details
                </Link>

                <hr />
                
            </div>
            ))
        }

        </div>
    );
}

export default Home;







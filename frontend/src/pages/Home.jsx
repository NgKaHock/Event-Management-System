import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import API from "../api";
import EventCard from "../components/EventCard";
import {groupEventsByMonth} from "../utils/groupEventsByMouth";


function Home(){

    const [events, setEvents] = useState([]);
    const groupedEvents = groupEventsByMonth(events);


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

            Object.entries(groupedEvents).map(([month, monthEvents])=> (
                    
            <div key={month}>

                <h2>{month}</h2>

                <hr />

                
            {
                monthEvents.map(event =>(
                    <EventCard
                        key = {event.id}
                        event = {event}
                    
                    />
            ))
        }

        </div>
    ))
)}

export default Home;







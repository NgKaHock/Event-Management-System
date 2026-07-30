import {useEffect, useState} from "react";
import API from "../api";
import CalendarView from "../components/CalendarView";


function Home(){

    const [events, setEvents] = useState([]);


    useEffect(()=>{

        API.get("events/")
        .then((response)=>{

            setEvents(response.data);

        })
        .catch((error)=>{

            console.log(error);

        });


    },[]);



    return (

        <div>

            <h1>
                Talentbank Career Fair Calendar
            </h1>


            <CalendarView
                events={events}
            />


        </div>

    );

}


export default Home;
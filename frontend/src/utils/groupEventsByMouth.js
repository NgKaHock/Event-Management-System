export function groupEventsByMonth(events){


    const grouped = {};
    const sortedEvents = [...events].sort(
    (a,b)=> new Date (a.date) - new Date(b.date)

);

    sortedEvents.forEach((event)=>{

        const date = new Date(event.date);


        const monthYear = date.toLocaleString("en-US",{
            month : "long",
            year : "numeric",

        });

        if (!grouped[monthYear]){
            grouped[monthYear] = [];
        }

        grouped[monthYear].push(event);
    });
    return grouped;
}



function StatusBadge({status}) {

    let text =" ";

    if(status === "ACTIVE"){
        text = "🟢 OPEN";
    }

    else if (status === "FULL"){
        text = "🔴 Full";
    }

    else if (status ==="CANCELLED"){
        text = "⚫ Cancelled"
    }

    return(

        <span>
            {text}
        </span>
    );

}

export default StatusBadge;
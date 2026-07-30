


function StatusBadge({ status }) {

    switch(status){

        case "OPEN":
            return <span>🟢 Open</span>;

        case "FULL":
            return <span>🔴 Full</span>;

        case "CANCELLED":
            return <span>⚫ Cancelled</span>;

        default:
            return <span>Unknown</span>;
    }

}

export default StatusBadge;
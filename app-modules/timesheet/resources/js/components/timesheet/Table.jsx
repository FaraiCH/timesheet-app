import TrackerBody from "./TrackerBody.jsx";
function Table(){
    return <table className={'table'}>
        <thead>
            <tr>
                <th>Day</th>
                <th>Shift</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Overtime</th>
                <th>Double</th>
                <th>Comment</th>
            </tr>
        </thead>
        <TrackerBody />
    </table>
}

export default Table;

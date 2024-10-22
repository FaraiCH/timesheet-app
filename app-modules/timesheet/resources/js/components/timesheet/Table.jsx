import Dropdown from "./Dropdown.jsx";
import Input from "./Input.jsx";
import TimePicker from "./TimePicker.jsx";
import TrackerBody from "./TrackerBody.jsx";
function Table(){
    return <table className={'table'}>
        <thead>
            <tr>
                <th>Day in the Week</th>
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

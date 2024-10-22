import Dropdown from "./Dropdown.jsx";
import Input from "./Input.jsx";
import TimePicker from "./TimePicker.jsx";
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
        <tbody>
            <tr>
                <td>Monday</td>
                <td><Dropdown /></td>
                <td><TimePicker placeholder="Select Start Time" format="HH:mm" attachToId="startTimePicker"/></td>
                <td><TimePicker placeholder="Select End Time" format="HH:mm" attachToId="endTimePicker"/></td>
                <td><Input /></td>
                <td><Input /></td>
                <td><Dropdown /></td>
            </tr>
        </tbody>
    </table>
}

export default Table;

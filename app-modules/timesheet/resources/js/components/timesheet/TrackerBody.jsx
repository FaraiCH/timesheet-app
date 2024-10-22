import Dropdown from "./Dropdown.jsx";
import TimePicker from "./TimePicker.jsx";
import Input from "./Input.jsx";

function TrackerBody()
{
    return <tbody>
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
}

export default TrackerBody;

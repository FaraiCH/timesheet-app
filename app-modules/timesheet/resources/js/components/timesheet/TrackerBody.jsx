import Dropdown from "./Dropdown.jsx";
import TimePicker from "./TimePicker.jsx";
import Input from "./Input.jsx";
function TrackerBody()
{
    return <tbody>
        <tr>
            <td>Monday</td>
            <td><Dropdown attachToId="" mapData="" /></td>
            <td><TimePicker placeholder="Select Start Time" format="HH:mm" attachToId="startTimePicker" value=""/></td>
            <td><TimePicker placeholder="Select End Time" format="HH:mm" attachToId="endTimePicker" value=""/></td>
            <td><Input type="number" placeholder="Overtime" name="" value="" attachToId="" disabled="true"/></td>
            <td><Input type="number" placeholder="Double Time" name="" value="" attachToId="" disabled="true"/></td>
            <td><Dropdown attachToId="" mapData="" /></td>
        </tr>
    </tbody>
}

export default TrackerBody;

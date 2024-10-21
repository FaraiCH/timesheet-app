
import Dropdown from "./Dropdown.jsx";
import Input from "./Input.jsx";
import TimePicker from "./TimePicker.jsx";

function Table(){
    return <table className={'table'}>
        <thead>
            <tr>
                <th>Day</th>
                <th>Shift</th>
                <th>Start</th>
                <th>End</th>
                <th>Overtime</th>
                <th>Double</th>
                <th>Comment</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Day in Week</td>
                <td><Dropdown /></td>
                <td><TimePicker /></td>
                <td></td>
                <td><Input /></td>
                <td><Input /></td>
                <td><Dropdown /></td>
            </tr>
        </tbody>
    </table>
}

export default Table;

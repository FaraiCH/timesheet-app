import Dropdown from "./Dropdown.jsx";
import TimePicker from "./TimePicker.jsx";
import Input from "./Input.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { setTime } from '../../Slice/rowSlice.js';

function TrackerBody() {
    const dispatch = useDispatch();
    const rows = useSelector(state => state.rows.rows);  // Get rows from Redux

    const handleStartTimeChange = (id, time, type) => {
        dispatch(setTime({ id, time, type }));  // Dispatch Redux action for this row
    };

    return (
        <tbody>
        {rows.map((row) => (
            <tr key={row.id}>
                <td>Monday</td>
                <td><Dropdown attachToId="" mapData="" /></td>
                <td>
                    <TimePicker
                        key={`startTimePicker-${row.id}`}
                        placeholder="Select Start Time"
                        format="HH:mm"
                        attachToId={`startTimePicker-${row.id}`}
                        value={row.startTime}
                        changeMethod={(e) => handleStartTimeChange(row.id, e.value, 'start')}  // Optionally, track end time
                    />
                </td>
                <td>
                    <TimePicker
                        placeholder="Select End Time"
                        format="HH:mm"
                        attachToId={`endTimePicker-${row.id}`}
                        value={row.endTime}
                        changeMethod={(e) => handleStartTimeChange(row.id, e.value, 'end')}  // Optionally, track end time
                    />
                </td>
                <td>
                    <Input
                        type="number"
                        placeholder="Overtime"
                        name=""
                        value={row.overtime}
                        attachToId={`overtime-${row.id}`}
                    />
                </td>
                <td>
                    <Input
                        type="number"
                        placeholder="Double Time"
                        name=""
                        value={row.doubleTime}
                        attachToId={`double-${row.id}`}
                        disabled={true}
                    />
                </td>
                <td><Dropdown attachToId="" mapData="" /></td>
            </tr>
        ))}
        </tbody>
    );
}

export default TrackerBody;

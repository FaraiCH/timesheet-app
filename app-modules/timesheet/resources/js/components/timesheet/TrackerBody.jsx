import Dropdown from "./Dropdown.jsx";
import TimePicker from "./TimePicker.jsx";
import Input from "./Input.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { setTime } from '../../Slice/timesheetSetup.js';
import { shift, comment } from "./dropdownContent/content.js";

function TrackerBody() {
    // We are going to be "dispatching" data in order to update/override the initial state concerning the time sheet
    const dispatch = useDispatch();
    // We call on our configured rows from Redux. look at it like this: state => name="rows" => rows in the slice object
    const rows = useSelector(state => state.rows.rows);
    const dateReady = useSelector(state => state.rows.dateReady);
    // This will handle our updates to the times and calculation for the row
    const handleStartTimeChange = (id, time, type) => {
        dispatch(setTime({ id, time, type }));  // Dispatch Redux action for this row
    };

    return (
        <tbody>
        {rows.map((row) => (
            <tr key={row.id}>
                <td>{row.dateCaptured}</td>
                <td><Dropdown attachToId="" mapData={shift} /></td>
                <td>
                    <TimePicker
                        key={`startTimePicker-${row.id}`}
                        placeholder="Select Start Time"
                        format="HH:mm"
                        attachToId={`startTimePicker-${row.id}`}
                        value={row.startTime}
                        changeMethod={(e) => handleStartTimeChange(row.id, e.value, 'start')}  // track start time
                    />
                </td>
                <td>
                    <TimePicker
                        placeholder="Select End Time"
                        format="HH:mm"
                        attachToId={`endTimePicker-${row.id}`}
                        value={row.endTime}
                        changeMethod={(e) => handleStartTimeChange(row.id, e.value, 'end')}  // track end time
                    />
                </td>
                <td>
                    <Input
                        type="number"
                        placeholder="Overtime"
                        name=""
                        value={row.overtime} // This will be updated according to the action dispatched by startTime and endTime
                        attachToId={`overtime-${row.id}`}
                        disabled={true}
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
                <td><Dropdown attachToId="" mapData={comment} /></td>
            </tr>
        ))}
        </tbody>
    );
}

export default TrackerBody;

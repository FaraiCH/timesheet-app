import Dropdown from "./Dropdown.jsx";
import TimePicker from "./TimePicker.jsx";
import Input from "./Input.jsx";
import {useDispatch, useSelector} from 'react-redux';
import { setTime, setComment, setShift } from '../../Slice/timesheetSetup.js';
import { shift, comment } from "./dropdownContent/content.js";


function TrackerBody() {
    // We are going to be "dispatching" data in order to update/override the initial state concerning the time sheet
    const dispatch = useDispatch();
    // We call on our configured rows from Redux. look at it like this: state => name="rows" => rows in the slice object
    const rows = useSelector(state => state.rows.rows);
    const handleStartTimeChange = (id, time, type) => {
        dispatch(setTime({ id, time, type })); // Dispatch Redux action for this row
    };

    const handleCommentChange = (id, comment) => {
        dispatch(setComment({ id, comment })); // Dispatch Redux action for comment
    };

    const handleShiftChange = (id, shift) => {
        dispatch(setShift({ id, shift })); // Dispatch Redux action for shift
    };

    return (
        <tbody>
        {rows.map((row) => (
            <tr key={row.id}>
                <td>{row.dateCaptured}</td>
                <td><Dropdown attachToId={`shift-${row.id}`} mapData={shift} value={row.shift} onChange={(e) => handleShiftChange(row.id, e.target.value)}/></td>
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
                        placeholder="Normal"
                        name=""
                        value={row.normal} // This will be updated according to the action dispatched by startTime and endTime
                        attachToId={`normal-${row.id}`}
                        disabled={true}
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
                <td><Dropdown attachToId={`comment-${row.id}`} mapData={comment} value={row.comment} onChange={(e) => handleCommentChange(row.id, e.target.value)}  /></td>
            </tr>
        ))}
        </tbody>
    );
}

export default TrackerBody;

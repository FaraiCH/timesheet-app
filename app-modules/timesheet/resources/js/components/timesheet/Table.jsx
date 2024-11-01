import TrackerBody from "./TrackerBody.jsx";
import Form from "./Form.jsx";
import Button from "./Button.jsx";
import {useSelector} from "react-redux";
import {useForm} from "@inertiajs/react";
import dateSpread from "../../Slice/plugins/dateSpread.js";
import calculateNormalTime from "../../Slice/plugins/calculateNormalTime.js";
import {calculateHours} from "../../Slice/plugins/hourCalculator.js";
import calculateDoubleTime from "../../Slice/plugins/calculateDoubleTime.js";

function Table(){
    const rows = useSelector(state => state.rows.rows);
    const form = useForm(
        rows
    )

    const onSubmit = (event) =>
    {
        event.preventDefault();
        form.post(route('timesheet.tracking.store'));
    }

    return <Form onSubmit={onSubmit}>
        <table className={'table'}>
            <thead>
            <tr>
                <th>Day</th>
                <th>Shift</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Normal</th>
                <th>Overtime</th>
                <th>Double</th>
                <th>Comment</th>
            </tr>
            </thead>
            <TrackerBody />
        </table>
        <Button type="submit" name="Submit" />
    </Form>

}

export default Table;

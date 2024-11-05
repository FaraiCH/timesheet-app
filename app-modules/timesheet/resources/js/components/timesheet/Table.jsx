import TrackerBody from "./TrackerBody.jsx";
import Form from "./Form.jsx";
import Button from "./Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useForm, usePage} from "@inertiajs/react";
import {useEffect} from "react";
import toast, {Toaster} from "react-hot-toast";



function Table(){
    // We are going to be "dispatching" data in order to update/override the initial state concerning the time sheet
    const dispatch = useDispatch();
    // We call on our configured rows from Redux. look at it like this: state => name="rows" => rows in the slice object
    const rows = useSelector(state => state.rows.rows);

    const form = useForm({
        rows: [...rows]
    });
    const page = usePage();

    useEffect(() => {
        if(page?.props?.message?.body){
            toast(page.props.message.body, {
                type: page.props.message.type,
                position: 'top-center',
            });
        }
    }, [page.props.message])

    useEffect(() => {
        // Use effect will make sure that we track the state of the rows.
        // So if the rows update, the effect will be captured. Basically, "update".
        form.setData('rows', rows);
    }, [rows]);
    // This will handle our updates to the times and calculation for the row
    const onSubmit = (event) =>
    {
        event.preventDefault();
        // Post data to Laravel Backend
        form.post(route('timesheet.tracking.store'));
    }

    return <Form onSubmit={onSubmit}>
        <Toaster />
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
        <Button type="submit" name="Save Records"/> {/* This should trigger our submit that will send our data to the backend */}
    </Form>

}

export default Table;

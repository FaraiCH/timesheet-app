import Input from "./Input.jsx";
import DatePicker from "./DatePicker.jsx";
import {setSideMenu} from "../../Slice/timesheetSetup.js";
import {useDispatch} from "react-redux";
import HourRange from "./HourRange.jsx";
import Autocomplete from "./Autocomplete.jsx";
import { usePage } from '@inertiajs/react';
function SideMenu()
{
    const { members, auth } = usePage().props;
    // We are going to be dispatching here because we want the data to be used
    const dispatch = useDispatch();

    const handleSubmit = (event) => {

        // preventDefault is to prevent the submit button from reloading the entire page
        event.preventDefault();
        // We get the form data when the submit has been clicked
        const formData = new FormData(event.target);
        const numberOfRows = formData.get('numberOfRows');
        const dateCaptured = formData.get('date');
        const hourRange = formData.get('slider');
        const member = formData.get('dropdownAuto');
        // Notice I am passing an object to the setSideMenu reducer. Remember, this reducer holds our state and action payload
        dispatch(setSideMenu({noRows: Number(numberOfRows), date: dateCaptured, hourRange: hourRange, member: member}));
    };

    return <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="input1" className="form-label">Team Member</label>
            <Autocomplete members={members} attachToId="dropdownAuto" placeholder="Choose Employee" />
        </div>

        <div className="mb-3">
            <label htmlFor="input2" className="form-label">Date</label>
            <DatePicker placeholder="Select Start Of Capturing" format="yyyy-MM-dd" attachToId="date" />
        </div>

        <div className="mb-3">
            <label htmlFor="input3" className="form-label">Days to Capture</label>
            <Input type="number" attachToId="numberOfRows" min="1" />
        </div>
        <div className="mb-3">
            <label htmlFor="input3" className="form-label">Daily Work Hours</label>
            <HourRange attachToId="slider" startValue="1" endValue="12" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
}

export default SideMenu;

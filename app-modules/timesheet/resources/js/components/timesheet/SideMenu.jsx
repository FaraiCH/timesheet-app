import Input from "./Input.jsx";
import DatePicker from "./DatePicker.jsx";
import {setNumberOfRows} from "../../Slice/timesheetSetup.js";
import {useDispatch} from "react-redux";
import HourRange from "./HourRange.jsx";

function SideMenu()
{
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
        console.log(hourRange);
        // Notice I am passing an object to the setNumberOfRows reducer. Remember, this reducer holds our state and action payload
        dispatch(setNumberOfRows({noRows: Number(numberOfRows), date: dateCaptured}));
    };

    return <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="input1" className="form-label">Team Member</label>
            <Input />
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

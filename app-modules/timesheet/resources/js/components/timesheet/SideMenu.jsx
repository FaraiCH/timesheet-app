import Input from "./Input.jsx";
import DatePicker from "./DatePicker.jsx";
import {setNumberOfRows} from "../../Slice/timesheetSetup.js";
import {useDispatch} from "react-redux";

function SideMenu()
{
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const numberOfRows = formData.get('numberOfRows');
        const dateCaptured = formData.get('date');
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
            <Input type="number" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
}

export default SideMenu;

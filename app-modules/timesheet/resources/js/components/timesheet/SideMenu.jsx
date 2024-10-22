import Input from "./Input.jsx";
import DatePicker from "./DatePicker.jsx";


function SideMenu()
{
    return <form>
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
            <Input />
        </div>
        <div className="mb-3">
            <label htmlFor="input3" className="form-label">Daily Work Hours</label>
            <Input />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
}

export default SideMenu;

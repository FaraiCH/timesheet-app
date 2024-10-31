
import {convertTime} from "./hourCalculator.js";
import dateSpread from "./dateSpread.js";
const calculateDoubleTime = (date, timeStart, timeEnd, hourRange, comment) => {
    // Convert the date from datepicker and times from timepicker to a date object
    const d1 = new Date(date + " " + convertTime(timeStart));
    const d2 = new Date(date + " " + convertTime(timeEnd));
    let dayName = dateSpread(date, 0, '')
    // Calculate the difference of times to get the hours
    let hours = Math.abs(d1 - d2) / 36e5;
    console.log(dayName, hourRange, hours);

    if(dayName === 'Sunday' || comment === 'Public Holiday Worked' || (dayName === 'Saturday' && hourRange == 9)){
        // Make sure the hours are selected to show the hours to be calculated into double time.

        if(hours > 0)
        {
            return hours;
        }
        else
        {
            return 0;
        }
    }
    else
    {
        return 0;
    }
}

export default calculateDoubleTime


import {convertTime} from "./hourCalculator.js";
import dateSpread from "./dateSpread.js";
const calculateDoubleTime = (date, timeStart, timeEnd, hourRange, comment, shift) => {
    // Convert the date from datepicker and times from timepicker to a date object
    const d1 = new Date(date + " " + convertTime(timeStart));
    const d2 = new Date(date + " " + convertTime(timeEnd));
    let dayName = dateSpread(date, 0, '');
    let hours;
    if(shift === 'Night')
    {
        // Crosses midnight, so add 24 hours to d2's time
        hours = (Math.abs((24 * 36e5) - (d1 - d2 ))) / 36e5;
    }
    else
    {
        // Calculate the difference of times to get the hours
        hours = Math.abs(d1 - d2) / 36e5;
    }

    if(dayName === 'Sunday' || comment === 'Public Holiday Worked' || (dayName === 'Saturday' && hourRange == 9))
    {
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

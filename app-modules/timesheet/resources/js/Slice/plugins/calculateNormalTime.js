import {convertTime} from "./hourCalculator.js";
import dateSpread from "./dateSpread.js";

const calculateNormalTime = (date, timeStart, timeEnd, hoursRange, shift) => {
    // Convert the date from datepicker and times from timepicker to a date object
    const d1 = new Date(date + " " + convertTime(timeStart));
    const d2 = new Date(date + " " + convertTime(timeEnd));
    let dayName = dateSpread(date, 0, '');
    // Calculate the difference of times to get the hours
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
    if(hours > hoursRange)
    {
        return hoursRange;
    }
    else
    {
        return hours;
    }


}

export default calculateNormalTime;

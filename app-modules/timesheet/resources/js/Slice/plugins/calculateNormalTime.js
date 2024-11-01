import {convertTime} from "./hourCalculator.js";
import dateSpread from "./dateSpread.js";

const calculateNormalTime = (date, timeStart, timeEnd, hoursRange) => {
    // Convert the date from datepicker and times from timepicker to a date object
    const d1 = new Date(date + " " + convertTime(timeStart));
    const d2 = new Date(date + " " + convertTime(timeEnd));
    let dayName = dateSpread(date, 0, '');
    // Calculate the difference of times to get the hours
    let hours =  Math.abs(d1 - d2) / 36e5;
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

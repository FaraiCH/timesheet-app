import dateSpread from "./dateSpread.js";

const calculateHours = (date, timeStart, timeEnd, hourRange) => {
    // Convert the date from datepicker and times from timepicker to a date object
    const d1 = new Date(date + " " + convertTime(timeStart));
    const d2 = new Date(date + " " + convertTime(timeEnd));
    // Get the day so we can find Saturday
    let dayName = dateSpread(date, 0, '')
    // Calculate the different in hours
    let hours = Math.abs(d1 - d2) / 36e5;

    //Check to see if it's Sunday or Saturday with 9 hours
    if(dayName === 'Sunday' || (dayName === 'Saturday' && hourRange == 9))
    {
        // There is no overtime if these criteria are met
        return 0
    }
    else
    {
        if(hours > hourRange)
        {
            // We check if time is over the hour range to calculate the remaining difference
            return hours - hourRange;
        }
        else
        {
            // Return this if overtime is not reached
            return 0;
        }
    }

}

const convertTime = (time) => {
    const date = new Date(time);
    return date.toTimeString().split(' ')[0];
}
export { calculateHours, convertTime }

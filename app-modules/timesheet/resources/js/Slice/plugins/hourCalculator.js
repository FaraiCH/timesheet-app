const calculateHours = (date, timeStart, timeEnd, hourRange) => {
    const d1 = new Date(date + " " + convertTime(timeStart));
    const d2 = new Date(date + " " + convertTime(timeEnd));
    let hours = Math.abs(d1 - d2) / 36e5;
    if(hours > hourRange){
        return hours - hourRange;
    }
    else
    {
        return 0;
    }
}

const convertTime = (time) => {
    const date = new Date(time);
    return date.toTimeString().split(' ')[0];
}
export default calculateHours

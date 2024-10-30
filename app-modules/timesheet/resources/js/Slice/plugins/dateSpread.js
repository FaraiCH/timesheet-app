// The plugin function will help us in spreading the dates appropriately according to the date set and days to
// in the side menu
const dateSpread = (date, days) =>
{
    let dateToSpread = new Date(date);
    // When we convert to date, Javascript will give us a timestamp
    // so we need to format the timestamp
    let dateNumFormat = dateToSpread.setDate(dateToSpread.getDate()+days);
    // This will give us the date format string from the timestamp used.
    return convertNumToDateString(dateNumFormat);
}

const convertNumToDateString = (numFormat) => {
    // Convert the timestamp to a Date object
    const date = new Date(numFormat);
    // Format the date as YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
    return `${year}-${month}-${day}`;
}
export default dateSpread

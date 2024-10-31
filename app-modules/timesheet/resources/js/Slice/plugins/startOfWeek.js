const getStartOfWeek = (date) => {
    // Use this to get the Monday of every week with the date format
    const givenDate = new Date(date);
    const day = givenDate.getDay(); // Sunday is 0, Monday is 1, and so on
    const diff = givenDate.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    return new Date(givenDate.setDate(diff)); // We return a date object of the Monday in the current week
}

export default getStartOfWeek

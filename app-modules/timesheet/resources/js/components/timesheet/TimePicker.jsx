function TimePicker()
{
    let timePicker = new ej.calendars.TimePicker({
        placeholder: 'Select a time',
        // sets the format property to display the time value in 24 hours format.
        format: 'HH:mm:ss',
    });
    timePicker.appendTo('#timePicker');

    return <input id="timePicker" name="timePicker" type="text" />;
}

export default TimePicker;

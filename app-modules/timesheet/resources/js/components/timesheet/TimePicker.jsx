function TimePicker(props)
{
    let timePicker = new ej.calendars.TimePicker({
        placeholder: props.placeholder,
        // sets the format property to display the time value in 24 hours format.
        format: props.format,
    });
    timePicker.appendTo('#'+props.attachToId);

    return <input id={props.attachToId} name={props.attachToId}  type="text" />;
}

export default TimePicker;

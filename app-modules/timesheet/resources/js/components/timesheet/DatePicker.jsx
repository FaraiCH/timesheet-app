function DatePicker(props)
{
    let startPicker = new ej.calendars.DatePicker({
        placeholder: props.placeholder,
        // sets the format.
        format: props.format,
        focus: function () {
            // To open the popup upon input click
            startPicker.show();
        },
    });
    startPicker.appendTo('#'+props.attachToId);

    return <input type="text" id={props.attachToId} name={props.attachToId} />
}

export default DatePicker;

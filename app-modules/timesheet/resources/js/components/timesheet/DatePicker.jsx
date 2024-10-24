import {useEffect, useRef} from "react";

function DatePicker(props)
{
    const datePickerRef = useRef(null);  // Ref to store the TimePicker instance

    useEffect(() => {
        // Only initialize the TimePicker if it hasn't been initialized yet
        if (!datePickerRef.current) {
            datePickerRef.current = new ej.calendars.DatePicker({
                placeholder: props.placeholder,
                // sets the format.
                format: props.format,
                focus: function () {
                    // To open the popup upon input click
                    datePickerRef.current.show();
                },
            });

            datePickerRef.current.appendTo('#' + props.attachToId);
        }

        // Cleanup the TimePicker instance when the component unmounts
        return () => {
            if (datePickerRef.current) {
                datePickerRef.current.destroy();
                datePickerRef.current = null;
            }
        };
    }, [props.attachToId, props.placeholder, props.format]);  // Only run when these props change

    return <input type="text" id={props.attachToId} name={props.attachToId} />
}

export default DatePicker;

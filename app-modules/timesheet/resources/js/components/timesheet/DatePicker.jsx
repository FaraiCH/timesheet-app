import {useEffect, useRef} from "react";

/*
    The reason we are using useRef and useEffect when it comes to the rendering of the date picker is as follows:
    The library being used is a purely javascript library that renders controls with it's own rendering functionalities
    When we do not use useEffect or useRef, the date picker upon us sending a dispatch for the time sheet to be updated will duplicate the control
    Because we are referencing the actual elements of the javascript library, I am able to destroy the instance so it does not repeatedly render.
 */
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

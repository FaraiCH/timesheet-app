import React, { useEffect, useRef } from 'react';

/*
    The reason we are using useRef and useEffect when it comes to the rendering of the time picker is as follows:
    The library being used is a purely javascript library that renders controls with it's own rendering functionalities
    When we do not use useEffect or useRef, the timepicker upon us sending a dispatch for the time sheet to be updated will duplicate the control
    Because we are referencing the actual elements of the javascript library, I am able to destroy the instance so it does not repeatedly render.
 */
function TimePicker(props) {
    const timePickerRef = useRef(null);  // Ref to store the TimePicker instance

    useEffect(() => {
        // Only initialize the TimePicker if it hasn't been initialized yet
        if (!timePickerRef.current) {
            timePickerRef.current = new ej.calendars.TimePicker({
                placeholder: props.placeholder,
                format: props.format,
                value: props.value,
                change: props.changeMethod,
            });

            timePickerRef.current.appendTo('#' + props.attachToId);
        }

        // Cleanup the TimePicker instance when the component unmounts
        return () => {
            if (timePickerRef.current) {
                timePickerRef.current.destroy();
                timePickerRef.current = null;
            }
        };
    }, [props.attachToId, props.placeholder, props.format, props.value, props.changeMethod]);  // Only run when these props change

    return <input id={props.attachToId} name={props.attachToId} type="text" />;
}

export default TimePicker;

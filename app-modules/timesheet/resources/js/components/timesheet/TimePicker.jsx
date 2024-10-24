import React, { useEffect, useRef } from 'react';

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

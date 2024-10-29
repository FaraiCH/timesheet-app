import {useEffect, useRef} from "react";
function HourRange(props)
{
    const timeRangePickerRef = useRef(null);  // Ref to store the TimePicker instance

    useEffect(() => {
        // Only initialize the TimePicker if it hasn't been initialized yet
        if (!timeRangePickerRef.current) {
            timeRangePickerRef.current = new ej.inputs.Slider({
                ticks: { placement: 'After', largeStep: 1, smallStep: 1, showSmallTicks: true },
                tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
                // Minimum value
                min: props.startValue,
                // Maximum value
                max: props.endValue,
                // Slider current value
                value: [1, 12],
                //Set Type
                type: 'Range'
            });

            timeRangePickerRef.current.appendTo('#' + props.attachToId);
        }

        // Cleanup the TimePicker instance when the component unmounts
        return () => {
            if (timeRangePickerRef.current) {
                timeRangePickerRef.current.destroy();
                timeRangePickerRef.current = null;
            }
        };
    }, [props.attachToId, props.startValue, props.endValue, props.changeMethod]);  // Only run when these props change

    return <div id="container">
        <div className="wrap">
            <div id={props.attachToId}>
            </div>
        </div>
    </div>
}


export default HourRange;

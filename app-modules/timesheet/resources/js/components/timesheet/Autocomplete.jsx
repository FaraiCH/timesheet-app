import {useEffect, useRef} from "react";

function Autocomplete(props)
{
    const autoCompleteRef = useRef(null);  // Ref to store the TimePicker instance

    let sportsData = [
        { Id: 'Game1', Game: 'Badminton' },
        { Id: 'Game2', Game: 'Basketball' },
        { Id: 'Game3', Game: 'Cricket' },
        { Id: 'Game4', Game: 'Football' },
        { Id: 'Game5', Game: 'Golf' },
        { Id: 'Game6', Game: 'Hockey' },
        { Id: 'Game7', Game: 'Rugby' },
        { Id: 'Game8', Game: 'Snooker' }
    ];

    useEffect(() => {
        // Only initialize the TimePicker if it hasn't been initialized yet
        if (!autoCompleteRef.current) {
            autoCompleteRef.current = new ej.dropdowns.AutoComplete({
                //set the data to dataSource property
                dataSource: sportsData,
                // By default, its enabled. For your better understanding, showcase this property.
                allowCustom: true,
                // maps the appropriate column to fields property
                fields: { value: 'Game' },
                // set placeholder to AutoComplete input element
                placeholder: props.placeholder,
            });
            autoCompleteRef.current.appendTo('#' + props.attachToId);
        }

        // Cleanup the TimePicker instance when the component unmounts
        return () => {
            if (autoCompleteRef.current) {
                autoCompleteRef.current.destroy();
                autoCompleteRef.current = null;
            }
        };
    }, [props.attachToId, props.changeMethod]);  // Only run when these props change

    return <div id="container">
        <div className="wrap">
            <div id={props.attachToId}>
            </div>
        </div>
    </div>
}

export default Autocomplete;

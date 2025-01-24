import {useEffect, useRef} from "react";

function Autocomplete(props)
{
    const autoCompleteRef = useRef(null);  // Ref to store the TimePicker instance

    let sportsData = [
        { Id: '1', Game: 'Farai' },
        { Id: '2', Game: 'Chad' },
        { Id: '3', Game: 'Gable' },
        { Id: '4', Game: 'Otto' },
        { Id: '5', Game: 'Levy' },
        { Id: '6', Game: 'Gary' },
        { Id: '7', Game: 'Sipho' },
        { Id: '8', Game: 'Soul' }
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

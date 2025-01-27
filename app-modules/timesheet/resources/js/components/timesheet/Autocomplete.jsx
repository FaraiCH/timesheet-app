import {useEffect, useRef} from "react";

function Autocomplete(props)
{
    const autoCompleteRef = useRef(null);  // Ref to store the TimePicker instance

    let members = props.members;

    useEffect(() => {
        // Preprocess members to combine Id and Name
        const processedMembers = members.map((member) => ({
            ...member,
            displayMember: `${member.id} - ${member.name}`, // Combine Id and Name
        }));
        // Only initialize the AutoComplete if it hasn't been initialized yet
        if (!autoCompleteRef.current) {
            autoCompleteRef.current = new ej.dropdowns.AutoComplete({
                //set the data to dataSource property
                dataSource: processedMembers,
                // By default, its enabled. For your better understanding, showcase this property.
                allowCustom: true,
                // maps the appropriate column to fields property
                fields: { value: 'displayMember' },
                // set placeholder to AutoComplete input element
                placeholder: props.placeholder,
            });
            autoCompleteRef.current.appendTo('#' + props.attachToId);
        }

        // Cleanup the AutoComplete instance when the component unmounts
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

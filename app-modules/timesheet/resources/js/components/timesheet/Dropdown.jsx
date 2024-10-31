
function Dropdown(props)
{
    return <select id={props.attachToId} className="form-select" value={props.value} onChange={props.onChange} aria-label="Default select example">
        <option value="none">Choose</option>
        // Map data to list options on the list
        {props.mapData.map((content) => (
            <option key={content} value={content} >{content}</option>
        ))}
            </select>;
}

export default Dropdown;

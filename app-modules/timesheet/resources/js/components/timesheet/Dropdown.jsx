
function Dropdown(props)
{
    return <select id={props.attachToId} className="form-select" aria-label="Default select example">
        <option value="none">Choose</option>
        // Map data to list options on the list
        {props.mapData.map((content) => (
            content === props.value? <option value={content} selected >{content}</option> : <option value={content} >{content}</option>
        ))}
            </select>;
}

export default Dropdown;


function Dropdown(props)
{
    return <select className="form-select" aria-label="Default select example">
        <option value="none">Choose</option>
        {props.mapData.map((content) => (
            <option value={content}>{content}</option>
        ))}
            </select>;
}

export default Dropdown;

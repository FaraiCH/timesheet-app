function Input(props)
{
    return <input type={props.type} className="form-control" id={props.attachToId}
                  onChange={props.onChange} name={props.attachToId} placeholder={props.placeholder} value={props.value} readOnly={props.disabled} />
}

export default Input;

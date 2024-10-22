function Input(props)
{
    return <input type={props.type} className="form-control" id={props.attachToId}
                 name={props.attachToId} placeholder={props.placeholder} disabled={props.disabled} />
}

export default Input;

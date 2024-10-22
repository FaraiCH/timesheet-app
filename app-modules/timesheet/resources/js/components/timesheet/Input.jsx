function Input(props)
{
    return <input type={props.type} className="form-control" id={props.attachToId}
                  placeholder={props.placeholder} />
}

export default Input;

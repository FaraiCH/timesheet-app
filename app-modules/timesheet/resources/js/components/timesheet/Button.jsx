function Button(props)
{
    return <button className={'btn btn-primary'} type={props.type}>{props.name}</button>
}

export default Button

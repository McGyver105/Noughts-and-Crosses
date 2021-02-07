const XOButton = (props) => {
    return (
        <td id="box1">
            {props.buttonInfo.notPressed ? <div>
                <section className="xoHover">
                    <button className="xoButton" disabled={props.disabled} onClick={(event) => {
                        props.handleClick(event, props.id)
                    }}>X</button>
                    <button className="xoButton" disabled={props.disabled} onClick={(event) => {
                        props.handleClick(event, props.id)
                    }}>O</button>
                </section>
            </div>
                : <div>
                    {props.buttonInfo.letter === 'X' ?
                        <p className="XOletters">X</p>
                        : <p className="XOletters">O</p>}
                </div>}
        </td>)
}



export default XOButton;
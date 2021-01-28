const XOButton = (props) => {
    return (
        <td id="box1">
            {props.buttonInfo.notPressed ? <div>
                <img src="https://www.designersguild.com/image/986/59524" alt="XO" className="whiteImg"></img>
                <section>
                    <button className="xoButton" onClick={(event) => {
                        props.handleClick(event, props.id)
                    }}>X</button>
                    <button className="xoButton" onClick={(event) => {
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
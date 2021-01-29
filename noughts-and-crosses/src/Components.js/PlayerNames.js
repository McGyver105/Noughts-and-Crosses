const PlayerNames = (props) => {
    return (
        props.xNeedsName ?
            <form onSubmit={(event) => {
                props.handleSubmit(event, "playerX")
            }}>
                <label>Player X Name:
                <input type="text" placeholder="enter name" onChange={(event) => {
                        props.handleTyping(event, "playerXname")
                }} value={props.valueX}></input>
                </label>
            </form>
        : props.oNeedsName ?
            <form onSubmit={(event) => {
                    props.handleSubmit(event, "playerO")
                    props.namesHaveBeenEntered()
            }}>
                <label>Player O Name:
                <input type="text" placeholder="enter name" onChange={(event) => {
                        props.handleTyping(event, "playerOname") 
                }} value={props.valueO}></input>
                </label>
            </form>
        : null
    );
}

export default PlayerNames;
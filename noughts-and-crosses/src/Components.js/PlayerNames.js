const PlayerNames = (props) => {
    return (
        props.xNeedsName ?
            <form onSubmit={(event) => {
                props.handleSubmit(event, "playerX")
            }}>
                <label>Player X Name:
                <input type="text" placeholder="player X name" onChange={(event) => {
                        props.handleTyping(event, "playerXname")
                }}></input>
                </label>
            </form>
        : props.oNeedsName ?
            <form onSubmit={(event) => {
                    props.handleSubmit(event, "playerO")
                    props.namesHaveBeenEntered()
            }}>
                <label>Player O Name:
                <input type="text" placeholder="player O name" onChange={(event) => {
                        props.handleTyping(event, "playerOname")
                }}></input>
                </label>
            </form>
        : null
    );
}

export default PlayerNames;
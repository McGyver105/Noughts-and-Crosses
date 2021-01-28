const WinnerButton = (props) => {
    return (
        <section>
            <button onClick={() => {
                props.handleWinner(props.playerX, props.playerXname)
            }}>X is the winner</button>
            <button onClick={(event) => {
                props.handleWinner(props.playerO, props.playerOname)
            }}>O is the winner</button>
        </section>
    )
}

export default WinnerButton;
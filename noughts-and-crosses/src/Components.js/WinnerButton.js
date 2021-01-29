const WinnerButton = (props) => {
    return (
        <section>
            <button onClick={() => {
                props.handleWinner(props.playerX, props.playerXname)
            }}>
                X is the winner
            </button>
            <button onClick={() => {
                props.handleWinner(props.playerO, props.playerOname)
            }}>
                O is the winner
            </button>
            <button onClick={() => {
                props.handleWinner('empty string', 'No-one')
            }}>
                Draw
            </button>
        </section>
    )
}

export default WinnerButton;
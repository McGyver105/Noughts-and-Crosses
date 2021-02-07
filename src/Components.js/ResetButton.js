const ResetButton = (props) => {
    return (
        <section className="playAgain">
            <button onClick={props.handleReset}>
                Play Again
            </button>
            <button onClick={props.handleSave}>
                Save Scores
            </button>
            <button onClick={props.handleClearSave}>
                Start Over
            </button>
        </section>
    )
}

export default ResetButton;
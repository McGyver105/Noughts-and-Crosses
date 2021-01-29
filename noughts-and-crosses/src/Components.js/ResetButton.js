const ResetButton = (props) => {
    return (
        <section>
            <button onClick={props.handleReset}>
                Reset Game Board
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
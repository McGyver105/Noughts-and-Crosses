const ResetButton = (props) => {
    return (
        <section>
            <button onClick={props.handleReset}>
                Reset Game Board
            </button>
        </section>
    )
}

export default ResetButton;
const ResetButton = (props) => {
    return (
        <section>
            <button onClick={props.handleReset}>
                Reset Game
            </button>
        </section>
    )
}

export default ResetButton;
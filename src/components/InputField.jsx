export const InputField = ({ text, onChangeTextHandler, onAddHandler }) => {
    return (
        <div className="control-container">
            <input value={text} type="text" placeholder="Add todo" onChange={onChangeTextHandler} />
            <button onClick={onAddHandler}>Add</button>
        </div>
    );
};

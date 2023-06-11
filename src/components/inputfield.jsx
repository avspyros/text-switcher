export default function Inputfield(props) {

  return (
    <div className="input-form">
      <input
        id="inputForm"
        placeholder="add text"
        autoFocus
        autoComplete="off"
        value={props.value}
        // onChange={props.handleTextInput}
        onChange={props.handleInputChange}
      />
    </div>
  )
}
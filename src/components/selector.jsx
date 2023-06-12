import ClearIcon from '../icons/clearIcon'

export default function Selector(props) {
  return (
    <div className='selector'>
      <label>Choose a tool:</label>
      <select
        value={props.value}
        onChange={props.handleSelect}
      >
        <option value="url">Friendly Url</option>
        <option value="uppercase">Upper Case</option>
        <option value="lowercase">Lower Case</option>
        <option value="capitalize">Capitalize 1st Letter</option>
        <option value="dash">Spaces to Dashes</option>
      </select>
      <button className='btn btn-clear' onClick={props.handleClear}>
        <ClearIcon />
        <span id="clear-tooltip">Clear Text</span>
      </button>
    </div>
  )
}


import CopyIcon from '../icons/copyIcon'

export default function Output(props) {
  return (
    <div className="output-box">
      <p>{props.handleOutput}</p>
      <button className="btn btn-copy" onClick={props.handleCopy}>
        <CopyIcon />
        <span id="copy-tooltip">Copy Text</span>
      </button>
    </div>
  )
}
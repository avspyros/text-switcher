import ThemeIcon from '../icons/themeIcon'

export default function Header(props) {

  return (
    <div className='header'>
      <h1>Text Switcher</h1>
      <div className="theme-switcher">
        <button className="theme-btn"
          onClick={props.toggleTheme}>
          <ThemeIcon />
        </button>
      </div>
    </div>
  )
}
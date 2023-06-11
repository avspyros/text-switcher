export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className='footer'>
      <p>Text Switcher V.1 by Avspyros - {getCurrentYear()}</p>
    </div>
  )
}
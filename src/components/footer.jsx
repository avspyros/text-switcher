export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className='footer'>
      <p>NetMorph - {getCurrentYear()}</p>
    </div>
  )
}
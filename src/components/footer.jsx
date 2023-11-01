export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className='footer'>
      <p>Text Switcher v1.1 by <a href="https://avspyros.netlify.app/" target="_blank">Avspyros</a> - {getCurrentYear()}</p>
    </div>
  );
}
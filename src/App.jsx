import { useState, useEffect } from 'react'
import { handleUrl, handleUpperCase, handleLowerCase, handleCapitalize, handleDash } from './functionality'
import './App.css'

import Header from './components/header'
import Selector from './components/selector'
import Inputfield from './components/inputfield'
import Output from './components/output'
import Footer from './components/footer'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('url')
  const [isLightTheme, setIsLightTheme] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsLightTheme(storedTheme === 'light')
    }
  }, [])


  const toggleTheme = () => {
    const newTheme = !isLightTheme
    setIsLightTheme(newTheme)
    localStorage.setItem('theme', newTheme ? 'light' : 'dark')
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSelect = (e) => {
    setSelectValue(e.target.value)
  }

  const handleClear = () => {
    setInputValue('')
  }

  const handleCopy = async () => {
    const textToCopy = document.querySelector(".output-box p").textContent

    try {
      if (textToCopy !== '') {
        await navigator.clipboard.writeText(textToCopy)
        console.log('Text copied to clipboard!')
      } else {
        console.log('Nothing to copy!')
      }
    } catch (error) {
      console.error('Failed to copy text:', error)
    }
  }

  const handleOutput = () => {
    switch (selectValue) {
      case 'url':
        return handleUrl(inputValue)
      case 'uppercase':
        return handleUpperCase(inputValue)
      case 'lowercase':
        return handleLowerCase(inputValue)
      case 'capitalize':
        return handleCapitalize(inputValue)
      case 'dash':
        return handleDash(inputValue)
      default:
        return inputValue
    }
  }

  return (
    <div className={`bg ${isLightTheme ? "light" : "dark"}`}>
      <div className="container">
        <Header toggleTheme={toggleTheme} />
        <Selector value={selectValue} handleSelect={handleSelect} handleClear={handleClear} />
        <Inputfield value={inputValue} handleInputChange={handleInputChange} />
        <Output handleOutput={handleOutput()} handleCopy={handleCopy} />
      </div>
      <Footer />
    </div>
  )

}

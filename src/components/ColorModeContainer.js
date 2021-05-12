import { useEffect, useState } from "react"
import ColorModeSwitcher from "./ColorModeSwitcher"

const ColorModeContainer = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("my-dark-mode")) || false
  )

  useEffect(() => {
    localStorage.setItem("my-dark-mode", JSON.stringify(darkMode))
  }, [darkMode])

  const modeClass = darkMode ? "bg-dark text-white" : ""

  return (
    <div className={`${modeClass} min-vh-100`}>
      <ColorModeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
    </div>
  )
}

export default ColorModeContainer

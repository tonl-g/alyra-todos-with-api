import { useEffect, useState } from "react"

const ColorModeContainer = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("my-dark-mode")) || false
  )
  const handleModeChange = () => {
    setDarkMode((mode) => !mode)
  }

  useEffect(() => {
    localStorage.setItem("my-dark-mode", JSON.stringify(darkMode))
  }, [darkMode])
  const modeClass = darkMode ? "bg-dark text-white" : ""
  return (
    <div className={`${modeClass} min-vh-100`}>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="activate"
          onChange={handleModeChange}
          checked={darkMode}
        />
        <label className="form-check-label" htmlFor="activate">
          Mode Sombre
        </label>
      </div>
      {children}
    </div>
  )
}

export default ColorModeContainer

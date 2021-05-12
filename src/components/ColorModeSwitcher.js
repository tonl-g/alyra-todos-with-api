import React from "react"

const ColorModeSwitcher = ({ darkMode, setDarkMode }) => {
  const handleModeChange = () => {
    setDarkMode((mode) => !mode)
  }
  return (
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
  )
}

export default ColorModeSwitcher

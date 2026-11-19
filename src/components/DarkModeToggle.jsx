import React from 'react'

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleDarkMode}
      aria-pressed={isDarkMode}
    >
      {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle

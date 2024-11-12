import React from 'react'

const Hamburger = ({ className, isOpen, onClick }) => {
  return (
    <div
      className={`hamburger-button ${className}`}
      onClick={onClick}
      role='button'
      aria-label='Toggle menu'
    >
      <div
        className={`transition-transform duration-300 ease-in-out ${
          isOpen ? 'rotate-45 translate-y-2.5' : ''
        }`}
      ></div>
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></div>
      <div
        className={`transition-transform duration-300 ease-in-out ${
          isOpen ? '-rotate-45 -translate-y-2.5' : ''
        }`}
      ></div>
    </div>
  )
}

export default Hamburger

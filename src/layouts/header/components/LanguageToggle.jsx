import React, { useState, useRef, useEffect } from 'react'
import i18n from 'i18next'
import './langToggle.css' // Ensure you create this CSS file
import langToggleImg from '../../../assets/Navbar/translate.svg'
import langToggleImgGold from '../../../assets/Navbar/translate-gold.svg'
// Import flag images
import enFlag from '../../../assets/Navbar/en.svg'
import esFlag from '../../../assets/Navbar/es.svg'
import zhFlag from '../../../assets/Navbar/zh-CN.svg'
import jaFlag from '../../../assets/Navbar/ja.svg'
import ptFlag from '../../../assets/Navbar/pt-br.svg'
import frFlag from '../../../assets/Navbar/fr.svg'

const CircularMenu = ({ className }) => {
  const [showOptions, setShowOptions] = useState(false)
  const [activeKey, setActiveKey] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const menuRef = useRef(null) // Create a ref for the menu

  const changeLanguage = lang => {
    setActiveKey(lang)
    i18n.changeLanguage(lang)
    setShowOptions(false) // Close options after selecting
  }

  const langFlag = {
    en: 'EN',
    es: 'ES',
    zh: 'Zh',
    ja: 'JA',
    pt: 'PT',
    fr: 'FR'
  }
  // const langFlag = {
  //   en: enFlag,
  //   es: esFlag,
  //   zh: zhFlag,
  //   ja: jaFlag,
  //   pt: ptFlag,
  //   fr: frFlag
  // }

  // Add event listener for clicks outside of the menu
  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowOptions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={menuRef}
      className={`${
        showOptions ? ' active' : ''
      } language-toggle relative ${className}`}
    >
      <button
        className='floating-btn flex items-center gap-x-4'
        onClick={() => setShowOptions(!showOptions)}
      >
        <img
          src={isHovered ? langToggleImgGold : langToggleImg}
          alt='lang-toggle'
          width={30}
          height={30}
          onMouseOver={() => {
            console.log(true)

            setIsHovered(true)
          }}
          onMouseOut={() => {
            console.log(false)

            setIsHovered(false)
          }}
        />

        <span>{langFlag[activeKey] || 'EN'}</span>
      </button>
      {showOptions && (
        <menu className='top-full left-1/2 absolute items-wrapper text-center -translate-x-1/2'>
          {Object.keys(langFlag).map((key, index) => (
            <button
              key={key}
              className={`block p-2 bg-[#070618] menu-item flag-button flag-${index}`}
              onClick={() => changeLanguage(key)}
            >
              {/* <img src={langFlag[key]} alt={key} width={48} height={48} /> */}
              {langFlag[key]}
            </button>
          ))}
        </menu>
      )}
    </div>
  )
}

export default CircularMenu

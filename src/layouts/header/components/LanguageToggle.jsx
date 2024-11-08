import React, { useState, useRef, useEffect } from 'react';
import i18n from 'i18next';
import './langToggle.css'; // Ensure you create this CSS file
import langToggleImg from '../../../assets/Navbar/langToggle.svg';
// Import flag images
import enFlag from '../../../assets/Navbar/en.svg';
import esFlag from '../../../assets/Navbar/es.svg';
import zhFlag from '../../../assets/Navbar/zh-CN.svg';
import jaFlag from '../../../assets/Navbar/ja.svg';
import ptFlag from '../../../assets/Navbar/pt-br.svg';
import frFlag from '../../../assets/Navbar/fr.svg';

const CircularMenu = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [activeKey, setActiveKey] = useState(1);
    const menuRef = useRef(null); // Create a ref for the menu

    const changeLanguage = (lang) => {
        setActiveKey(lang);
        i18n.changeLanguage(lang);
        setShowOptions(false); // Close options after selecting
    };

    const langFlag = {
        'en': enFlag,
        'es': esFlag,
        'zh': zhFlag,
        'ja': jaFlag,
        'pt': ptFlag,
        'fr': frFlag,
    };

    // Add event listener for clicks outside of the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef} className={`circular-menu${showOptions ? ' active' : ''} language-toggle relative`}>
            <button className="floating-btn relative" onClick={() => setShowOptions(!showOptions)}>
                <img src={langToggleImg} alt="lang-toggle" width={60} height={60} />
                <img src={langFlag[activeKey] || enFlag} alt="lang-toggle" width={35} height={35} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]' />
            </button>
            {showOptions && (
                <menu className="items-wrapper absolute left-1/2 -translate-x-1/2 text-center">
                    {Object.keys(langFlag).map((key, index) => (
                        <button
                            key={key}
                            className={`block my-2 menu-item flag-button flag-${index}`}
                            onClick={() => changeLanguage(key)}
                        >
                            <img src={langFlag[key]} alt={key} width={48} height={48} />
                        </button>
                    ))}
                </menu>
            )}
        </div>
    );
};

export default CircularMenu;
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './components/LanguageToggle'
import icon from '../../assets/Navbar/AFS.png'
import './header.css'
import Button from '../../components/button'
import Hamburger from './components/Hamburger'
import MobileMenu from './components/MobileMenu'

function Header () {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHamBtnOpen, setIsHamBtnOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    console.log('isHamBtnOpen', isHamBtnOpen)
  }, [isHamBtnOpen])
  return (
    <header
      className={`py-4 fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled
          ? ' bg-gradient-to-b from-[#1a1919] to-transparent shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between mx-auto px-4 container'>
        <Link to='/'>
          <img src={icon} width={60} height={60} />
        </Link>
        <nav className='lg:flex items-center gap-x-10 hidden'>
          <Link to='/'>{t('navbar.home')}</Link>
          <Link to='/about'>{t('navbar.about')}</Link>
          <Link to='/contact'>{t('navbar.contact')}</Link>
          <Link to='/academy'>{t('navbar.academy')}</Link>
          <Link to='/club'>{t('navbar.club')}</Link>
          <Link to='/conetworking'>{t('navbar.conetworking')}</Link>
        </nav>
        <div className='flex items-center gap-x-4 pr-12 lg:pr-0'>
          <LanguageToggle className='sm:flex hidden' />
          <Button className='btn-border-gradient'>Connect Wallet</Button>
        </div>
      </div>
      <Hamburger
        onClick={() => {
          setIsHamBtnOpen(prev => !prev)
        }}
        className='z-[9999999] flex lg:hidden'
        isOpen={isHamBtnOpen}
      />
      <MobileMenu className='flex lg:hidden' isOpen={isHamBtnOpen} />
      <LanguageToggle className='top-22 right-4 !fixed flex sm:hidden' />
    </header>
  )
}

export default Header

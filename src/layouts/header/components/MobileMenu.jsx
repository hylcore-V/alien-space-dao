import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const MobileMenu = ({ className, isOpen=false }) => {
  const { t } = useTranslation()
  return (
    <div className={`fixed flex items-center transition-all duration-700 left-0 top-0 bg-[#070618e6] w-full h-screen ${isOpen? " translate-y-0":" -translate-y-full"}`}>
      <nav
        className={`flex w-full flex-col gap-y-4 px-16 py-16 text-[16px]  ${className}`}
      >
        <Link to='/'>{t('navbar.home')}</Link>
        <Link to='/about'>{t('navbar.about')}</Link>
        <Link to='/contact'>{t('navbar.contact')}</Link>
        <Link to='/academy'>{t('navbar.academy')}</Link>
        <Link to='/club'>{t('navbar.club')}</Link>
        <Link to='/conetworking'>{t('navbar.conetworking')}</Link>
      </nav>
    </div>
  )
}
export default MobileMenu

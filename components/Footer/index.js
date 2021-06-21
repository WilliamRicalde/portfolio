import ContactButtons from 'components/ContactButtons'

import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <span className={style.logo}>william</span>
      <p>Hecho por William Huchim Ricalde</p>
      <ContactButtons />
    </footer>
  )
}

export default Footer

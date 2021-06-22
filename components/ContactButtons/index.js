import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa'
import style from './Buttons.module.css'

const ContactButtons = () => {
  return (
    <div className={style.container}>
      <a className={style.button}><FaPhoneAlt /></a>
      <a className={style.button}><FaEnvelope /></a>
      <a className={style.button}><FaInstagram /></a>
      <a className={style.button}><FaTwitter /></a>
    </div>
  )
}

export default ContactButtons

import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa'
import style from './Buttons.module.css'

const ContactButtons = () => {
  return (
    <div>
      <button className={style.button}><FaPhoneAlt /></button>
      <button className={style.button}><FaEnvelope /></button>
      <button className={style.button}><FaInstagram /></button>
      <button className={style.button}><FaTwitter /></button>
    </div>
  )
}

export default ContactButtons

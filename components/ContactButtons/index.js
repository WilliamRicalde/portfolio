import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import style from './Buttons.module.css'

const ContactButtons = () => {
  return (
    <div className={style.container}>
      <a href='tel:987-800-3462' className={style.button}><FaPhoneAlt /></a>
      <a href='mailto:williamhuchim@gmail.com' className={style.button}><FaEnvelope /></a>

    </div>
  )
}

export default ContactButtons

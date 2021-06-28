import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import style from './Buttons.module.css'

const ContactButtons = () => {
  return (
    <div className={style.container}>
      <a href='mailto:williamhuchim@gmail.com' className={style.button}><FaEnvelope /></a>
      <a href='https://github.com/WilliamRicalde' className={style.button}><FaGithub /></a>
      <a href='https://github.com/WilliamRicalde' className={style.button}><FaLinkedinIn /></a>
    </div>
  )
}

export default ContactButtons

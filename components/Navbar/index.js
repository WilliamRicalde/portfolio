import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <span className={style.logo}>william</span>
      <ul className={style.buttons}>
        <li>Hola</li>
        <li>Proyectos</li>
        <li>Hablemos</li>
      </ul>
      <button className={style.primary}>Descargar Curriculum</button>
    </nav>
  )
}

export default Navbar

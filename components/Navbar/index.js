import Link from 'next/link'

import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <span className={style.logo}>william</span>
      <ul className={style.buttons}>
        <Link href='#main'><li>Hola</li></Link>
        <Link href='#proyectos'><li>Proyectos</li></Link>
        <Link href='#hablemos'><li>Hablemos</li></Link>
      </ul>
      <a href='/CV-WilliamHuchim.pdf' download className={style.primary}>Descargar Curriculum</a>
    </nav>
  )
}

export default Navbar

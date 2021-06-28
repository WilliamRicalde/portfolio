import Link from 'next/link'

import style from './Proyect.module.css'

const Proyect = ({ proyect }) => {
  const { title, description, proyectUrl, githubRepo, image } = proyect

  return (
    <div className={style.proyect}>
      <div className={style.proyectTxt}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
          <Link href={githubRepo}><button className={style.secondary}>Ver código</button></Link>
          <Link href={proyectUrl}><button className={style.primary}>Ver proyecto</button></Link>
        </div>
      </div>
      <div className={style.proyectImg}>
        <img src={image.url} alt='pagina web' />
      </div>
    </div>
  )
}

export default Proyect

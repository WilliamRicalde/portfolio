import Image from 'next/image'
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
          <Link href={githubRepo}><button>Ver código</button></Link>
          <Link href={proyectUrl}><button>Ver proyecto</button></Link>
        </div>
      </div>
      <div className={style.proyectImg}>
        <Image src={image.url} width={500} height={250} />
      </div>
    </div>
  )
}

export default Proyect

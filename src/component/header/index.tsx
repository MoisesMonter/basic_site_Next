import Image from 'next/image'
import Logo from './logo'
import style from './head.module.scss'
import Search from './search'
import User from '../user'
export default function Home() {
  return (
    <>
    <header className={style.main}>
        <div>
            <Logo/>
        </div>  
        <div>
          <Search/>
        </div>
        <div>
            <User/>
        </div>
    </header>


    </>

  )
}

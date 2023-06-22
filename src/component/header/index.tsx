import Image from 'next/image'
import Logo from './logo'
import stylesearch from './stylesearch.module.scss'
import Search from './search'
import User from '../user'
export default function Home() {
  return (
    <>
    <header className={stylesearch.header}>
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

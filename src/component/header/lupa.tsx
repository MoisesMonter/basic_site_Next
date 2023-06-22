import Image from 'next/image'
import Lupa from  '../../public/svg/lupa.svg'
import stylesearch from './stylesearch.module.scss'

export default function lupa(){
    return (<Image alt="Lupa"src={Lupa} className={stylesearch.lupa}></Image>)
}
import Photo from '../../public/svg/image.svg'
import Image from 'next/image'
export default function photo(){
    return(
        <Image alt="foto" src ={Photo}/>
    )
}
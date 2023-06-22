import bookbrand from "../../public/svg/logo.svg";
import Image from 'next/image'
export default function logo(){
    return(
        <Image priority src={bookbrand} alt="Logo"/>
    )
}
import Img from './img'
import Instagram from "../social_icon/instagram"
import style from './style.module.scss'
export default function(){
    return (
        <div className={style.main}>
            <Img/>
            <article>
                
                <p>UserName</p>
                <div>
                    <Instagram/>
                    <p>@Username</p>
                </div>
            </article>
            
        </div >
    )
}
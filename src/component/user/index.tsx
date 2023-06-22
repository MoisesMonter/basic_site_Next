import Img from './img'
import Instagram from "../social_icon/instagram"
import style from './style.module.scss'
export default function(){
    return (
        <div className={style.main}>
            <article>
                <Img/>
                <p>Name User</p>
            </article>
            <div>
                <Instagram/><p>@Username</p>
                   

            </div>
        </div >
    )
}
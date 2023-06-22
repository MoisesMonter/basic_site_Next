import Lupa from './lupa'
import stylesearch from './stylesearch.module.scss'
export default function search(){
    return(
    <form action="/send-data-here" method="post" className={stylesearch.main}>
        <input type="text" id="first" name="first" />
        <button type='submit' ><Lupa/></button>
    </form>
    )

}
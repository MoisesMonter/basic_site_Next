import style from './main.module.scss'
import Product from './product'

export default function listed_product(){
   
    return(
        <div className={style.main}>
            <div>
            <p>Encontre as melhores indicações de livros</p>
            </div>
            <div className={style.listed}>
                <Product/>
            </div>
        </div>
    )
}
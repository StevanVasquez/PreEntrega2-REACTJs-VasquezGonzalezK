import { useState, useEffect } from "react"
import { ObtenerDatos } from '../../helpers/ObtenerDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"


const ItemListContainer = () => {

        const [products, setProducts] = useState([]);
        const [cargando, setCargando] = useState(true)

        const { categoriaId } = useParams()
    
        useEffect(() => {
            setCargando(true)
    
            ObtenerDatos()
                .then(resolve => {
                    if (categoriaId) {
                        setProducts(resolve.filter(prods => prods.category === categoriaId))
                    }else{
                        setProducts(resolve)
                    }
                    
                })
                .catch(error => console.log(error))
                .finally(() => {
                    setCargando(false)
                })
        }, [categoriaId])
    
    return (
        <div>
            {
                cargando
                    ? <h2 className="Cargando_item_list_container">Espere un momento...</h2>
                    : <ItemList products={products}/>
            }
        </div>
    )
}

export default ItemListContainer
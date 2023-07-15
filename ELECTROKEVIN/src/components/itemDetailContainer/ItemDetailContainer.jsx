import { useEffect, useState } from "react"
import { ObtenerDatos } from "../../helpers/ObtenerDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [item,setItem] = useState(null)
    const [cargando, setCargando] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setCargando(true)

        ObtenerDatos() 
            .then(resolve => {
                setItem(resolve.find(prods => prods.id === Number(itemId)))
            })
            .finally(() => setCargando(false))
    }, [])


    return (
        <div>
            {
            cargando
                ? <h2 className="Cargando_item_detail_container">Espere un momento...</h2>
                : <ItemDetail item={item}/>
            }   
        </div>
    )
}

export default ItemDetailContainer
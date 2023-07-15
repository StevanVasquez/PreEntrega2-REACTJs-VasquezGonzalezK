import { Link } from "react-router-dom"
import './ItemCard.css'

const ItemCard = ({item}) => {

    return (
        
        <div className="cards">

                <div className="card_img">
                    <img src={item.img} alt={item.name}/>
                </div>

                <div className="card_body"> 
                    <h4 className="card_title">{item.name}</h4>
                    <p className="card_description">{item.description}</p>
                    <p className="card_price">Precio: ${item.precio}</p>
                </div>

                <div>
                    <Link className="card_boton_link" to={`/detail/${item.id}`}>Ver mas</Link>
                </div>
            
            </div>
        
    )
}

export default ItemCard
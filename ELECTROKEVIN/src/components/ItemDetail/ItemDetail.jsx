import "./ItemDetail.css"

const ItemDetail = ({item}) => {

    return (
    <div className="item_detail">

        <div className="container_item_detail">
            <h2 className="name_detail">{item.name_detail}</h2>
            <img src={item.img} alt={item.name} />
            <h3 className="model_detail">Modelo: {item.model}</h3>
            <p className="marca_detail">Marca: {item.marca}</p>
            <p className="precio_detail">Precio: {item.precio}</p>

            <div className="detail_button">
                <button>Agregar al carro</button>
            </div>
        </div>

    </div>
    )
}

export default ItemDetail
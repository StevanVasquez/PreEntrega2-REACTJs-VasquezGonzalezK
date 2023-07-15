import ItemCard from '../ItemCard/ItemCard'
import './Itemlist.css'

const ItemList = ({products}) => {

    return (
        <div>
            <h2 className="item_list_title">Productos</h2>
            <p className="item_list_description">Vendemos productos de tecnologia 100% original </p>
            <hr/>

            <div className="container_item_list">
            {
                products.map((prods) => <ItemCard key={prods.id} item={prods}/>)
            }
            </div>
        </div>
    )
}

export default ItemList
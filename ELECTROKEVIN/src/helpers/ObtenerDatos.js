import products from "../data/products.json"

export const ObtenerDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout ( () => {
            resolve(products)
        }, 500)
    })
}
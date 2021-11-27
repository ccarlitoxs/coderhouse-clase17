import generateProduct from "../utils/productos.utils.js"


const products = []



export async function postProduct(cant=5) {
    let cantidad = cant
    if(cant) cantidad = cant

    for (let i = 0; i < cantidad; i++) {
        const product = {
            id: i + 1,
            ...generateProduct()
        }
        products.push(product)

    }
    return products
}




export async function getProductos() {
    try {
        return products
    } catch (error) {
        throw new Error(error)        
        
    }
    
}
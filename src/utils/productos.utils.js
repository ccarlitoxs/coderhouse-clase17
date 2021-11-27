import faker from "faker";

export default function generateProduct() {
    return{
        nombre: faker.commerce.productName(),
        precio:faker.commerce.price(),
        foto:faker.image.imageUrl()
    }    
}
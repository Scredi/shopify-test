
import { client } from '../../utils/shopify-client'

export async function getProducts() {
    const products = await client.product.fetchAll();
    return JSON.parse(JSON.stringify(products));
}

export async function getProduct(handle) {
    const product = await client.product.fetchByHandle(handle);
    return JSON.parse(JSON.stringify(product))
}

export async function createCart() {
    const cart = await client.checkout.create();
    return JSON.parse(JSON.stringify(cart));
}

export async function addToCart(productId, quantity) {

}
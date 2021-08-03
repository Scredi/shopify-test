
import { client } from '../../utils/shopify-client'

// A voir pour peupler un store ou un context avec ces infos

export async function getProducts() {
    const products = await client.product.fetchAll();
    return JSON.parse(JSON.stringify(products));
}

export async function getProduct(handle) {
    const product = await client.product.fetchByHandle(handle);
    return JSON.parse(JSON.stringify(product));
}

export async function createCart() {
    const cart = await client.checkout.create();
    return JSON.parse(JSON.stringify(cart));
}

export async function addToCart(cartId, productId, quantity) {
    const cart = await client.checkout.addLineItems(cartId, [{ productId, quantity: parseInt(quantity, 10) }]);
    return JSON.parse(JSON.stringify(cart));
}

export async function removeFromCart(cartId, productId) {
    const cart = await client.checkout.removeLineItems(cartId, [productId]);
    return JSON.parse(JSON.stringify(cart));
}

export async function updateQuantityFromCart(cartId, productId, quantity) {
    const cart = await client.checkout.updateLineItems(cartId, [{ id: productId, quantity: parseInt(quantity, 10) }]);
    return JSON.parse(JSON.stringify(cart));
}
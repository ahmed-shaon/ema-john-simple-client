import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    const productsData = await fetch('products.json')
    const products = await productsData.json();

    const saveCart = getStoredCart();
    // console.log(products)
    const previousCart = [];
    for(const id in saveCart){
        const addProduct = products.find(product => id === product.id)
        if(addProduct){
            addProduct.quantity = saveCart[id];
            previousCart.push(addProduct)
        }
    }
    // console.log(previousProduct);

    return {products, previousCart};
}
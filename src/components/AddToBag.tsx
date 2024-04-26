'use client'

import ProductCard from './ProductCart';
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'

export interface ProductCart{
    name: string;
    imageUrl: string;
    price: number;  
}



export default function AddToBag({name, imageUrl, price}: ProductCart) {

        const {addItem, handleCartClick} = useShoppingCart();
        const product = {
                name: name,
                imageUrl: imageUrl,
                price: price,
                id:'string',
                sku: 'string', 
        }
    return (
        <Button onClick={()=>{ addItem(product), handleCartClick() }}>
            Add to Cart
        </Button>
    )
}

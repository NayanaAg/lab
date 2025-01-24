import React from "react";
import CartButton from "./CartButton";

interface ProductCardProps {
    product: {
        id: number;
        title: string;
        price: number;
        image: string;
    };
    addToCart: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    return <>
        <div>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} className="image" />
            <p>${product.price}</p>
            <CartButton onclick={() => addToCart(product.id)} />
        </div>
    </>
}

export default ProductCard
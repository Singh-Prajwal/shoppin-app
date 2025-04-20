import React from "react";

interface Product {
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
}

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { imageUrl, name, brand, price, originalPrice, discountPercentage } =
    product;

  return (
    <div className="w-[90vw] max-w-sm h-[80vh] rounded-2xl bg-white shadow-xl p-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-2/3 object-cover rounded-xl"
      />
      <div className="mt-4 space-y-1">
        <h2 className="text-lg font-bold capitalize">{name}</h2>
        <p className="text-sm text-gray-500 capitalize">{brand}</p>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-lg font-bold">₹{price}</span>
          <span className="line-through text-gray-400">₹{originalPrice}</span>
          <span className="text-green-600 text-sm">
            ({discountPercentage}% OFF)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

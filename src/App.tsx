import { useState } from "react";
import useSwipe from "./hooks/useSwipe";
import ProductCard from "./components/ProductCard";
import SwipeableCard from "./components/SwipeableCard";
import { products } from "./data/products";

const MainScreen = () => {
  const [swipeDirection, setSwipeDirection] = useState<
    "left" | "right" | "up" | null
  >(null);
  const [productName, setProductName] = useState("");
  const handleSwipe = (dir: "left" | "right" | "up" | null, index: number) => {
    const productId = products[index].id;
    setProductName(products[index].brand);
    if (dir === "right") {
      console.log(`Product ${productId}: ✅ Saved`);
    } else if (dir === "left") {
      console.log(`Product ${productId}: ❌ Passed`);
    } else if (dir === "up") {
      console.log(`Product ${productId}: ⭐️ Added to Cart`);
    }

    setSwipeDirection(dir);
    setTimeout(() => setSwipeDirection(null), 1000);
  };

  const { springs, bind } = useSwipe(products.length, handleSwipe);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
      {springs.map((style, i) => (
        <SwipeableCard key={i} style={style} bind={() => bind(i)}>
          <ProductCard product={products[i]} />
        </SwipeableCard>
      ))}

      {swipeDirection && (
        <div className="absolute bottom-10 px-4 py-2 rounded-xl bg-white shadow-lg text-gray-800 text-md font-semibold">
          {swipeDirection === "right" && `✅ ${productName} Save`}
          {swipeDirection === "left" && `❌ ${productName} Pass`}
          {swipeDirection === "up" && `⭐️ ${productName} Add To Cart`}
        </div>
      )}
    </div>
  );
};

export default MainScreen;

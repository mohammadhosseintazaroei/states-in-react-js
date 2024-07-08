import { useState } from "react";

function AddToCard(props) {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      {count <= 0 ? (
        <button onClick={handleIncrease} className="addToCart">
          <>Add To Cart</>
        </button>
      ) : (
        <button className="addToCartMore">
          <div onClick={handleDecrease}>-</div>
          <div>{count}</div>
          <div onClick={handleIncrease}>+</div>
        </button>
      )}
    </>
  );
}

export default AddToCard;

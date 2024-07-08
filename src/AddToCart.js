import { useState } from "react";

function AddToCard(props) {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <button onClick={handleIncrease} className="addToCart">
      <>Add To Cart</>
    </button>
  );
}

export default AddToCard;

import "./card.css";
import AddToCart from "./AddToCart";
function Card(props) {
  const { id, title, price } = props;
  
  return (
    <div className="container">
      <h1 className="title">{props.title}</h1>
      <span className="price">{props.price}</span>
      <AddToCart
        product={{
          id,
          title,
          price,
        }}
      />
    </div>
  );
}

export default Card;

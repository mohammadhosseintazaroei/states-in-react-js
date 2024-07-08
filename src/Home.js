import Card from "./Card";
const products = [
  {
    title: "Iphone 14 Pro",
    price: 100000000,
  },
  {
    title: "Iphone 13 Pro",
    price: 90000000,
  },
  {
    title: "Iphone 14 Pro Max",
    price: 80000000,
  },
];
function Home() {
  return (
    <>
      {products.map((item, i) => (
        <Card id={i} title={item.title} price={item.price} />
      ))}
    </>
  );
}

export default Home;

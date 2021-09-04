import ProductCard from "./ProductCard";

const Products = ({ items = [], onProductCardClicked }) => {
  return (
    <div style={{ display: "flex", flexWrap: 'wrap'}}>
      {items.map((item) => (
        <ProductCard 
          key={item.id} 
          image={item.image} 
          title={item.title} 
          price={item.price} 
          onClicked={() => onProductCardClicked(item.id)}
        />
      ))}
    </div>
  )
};

export default Products;
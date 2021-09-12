import '../styles/ProductCard.css'

const ProductCard = ({image, title, price, onProductClicked}) => {
    return (
      <div className="product-card" onClick={onProductClicked}>
        <img src={image} alt={title} />
        <div className="product-card-info">
          <p>{title}</p>
          <p>{price}</p>
        </div>
      </div>
      );
};

export default ProductCard;
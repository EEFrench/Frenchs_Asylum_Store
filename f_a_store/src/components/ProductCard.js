import "../styles/styles.css"

const ProductCard = ({image, title, price, onClicked}) => {
    return (
        <div className="product-card" onClick={onClicked}>
          <img src={image} alt={title} />
          <div className="product-card-info">
            <p>{title}</p>
            <p>{price}</p>
          </div>
        </div>
      );
};

export default ProductCard;
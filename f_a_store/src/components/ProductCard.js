import "../styles/ProductCard.css"

const ProductCard = ({image, title, price, onProductClicked}) => {
    return (
      <div>
        {/* style=({ display: "inline-block", border: "1px solid black", margin: "15px" }) */}
          <div className="product-card" onClick={onProductClicked}>
            <img src={image} alt={title} />
            <div className="product-card-info">
              <p>{title}</p>
              <p>{price}</p>
            </div>
          </div>
      </div>
      );
};

export default ProductCard;
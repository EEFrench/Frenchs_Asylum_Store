import "../styles/styles.css"
import PropTypes from "prop-types"

const ProductDetails = (props) => {
    return (
        <div className='productDetailsContainer'>
            <div className ='productDetailsSection'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className ='productDetailsSection'>
                <div className ='productDetailsHeader'>
                    <p className ='productDetailstitle'>
                        {props.title}  
                    </p>
                    <p className ='productDetailsCategory'>
                        {props.catergory}
                    </p>
                </div>
                <div className ='productDetailsHeader'>
                {/* DISPLAY A "QUANTITY" INPUT WITH DEFAULT VALUE OF 1 */}
                </div>
                <div className ='productDetailsSubSection'>
                    <p>Description</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

ProductDetails.PropTypes = {
    image: PropType.string.isRequired,
    title: PropType.string.isRequired,
    price: PropType.string.isRequired,
    category: PropType.string.isRequired,
    quntity: PropType.string.isRequired,
    description: PropType.string.isRequired,
};

export default ProductDetails;
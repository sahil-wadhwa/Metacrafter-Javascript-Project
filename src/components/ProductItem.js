import ProductDate from './ProductDate';
import './ProductItem.css';

function ProductItem(props){
    const itemName=props.itemName;
    const date=props.date;
    const itemPrice=props.itemPrice;
    return(
        <div className="product-item">
            <ProductDate date={date} className="date-card"></ProductDate>
            <div className="item-name">{itemName}</div>
            <div className="item-price">₹{itemPrice}</div>
        </div>
    )
}
export default ProductItem;
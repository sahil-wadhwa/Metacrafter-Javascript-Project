import ProductItem from './ProductItem';
import './Products.css'



function Products(props){
    
    return(
        
        <div className="products">
            <ProductItem itemName={props.items[0].title} itemPrice={props.items[0].amount} date={props.items[0].date}></ProductItem>
            <ProductItem itemName={props.items[1].title} itemPrice={props.items[1].amount}date={props.items[1].date}></ProductItem>
            <ProductItem itemName={props.items[2].title} itemPrice={props.items[2].amount} date={props.items[2].date}></ProductItem>
            <ProductItem itemName={props.items[3].title} itemPrice={props.items[3].amount} date={props.items[3].date}></ProductItem>
            <ProductItem itemName={props.items[4].title} itemPrice={props.items[4].amount} date={props.items[4].date}></ProductItem>

        </div>
    )
}
export default Products;

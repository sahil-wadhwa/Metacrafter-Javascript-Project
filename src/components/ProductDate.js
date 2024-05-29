import './ProductDate.css';

function ProductDate(props){
    const month=props.date.toLocaleString('en-us',{month:'long'});
    const year=props.date.getFullYear();
    const date =props.date.toLocaleString('en-us',{day:'2-digit'});
    return(
        <div className="date-card">
            <div className="month">{month}</div>
            <div className="year">{year}</div>
            <div className="date">{date}</div>
        </div>
    )
}
export default ProductDate;
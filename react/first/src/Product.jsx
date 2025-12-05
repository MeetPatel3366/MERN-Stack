// Build a Product component that accepts title, price, and availability as props.
// Display product details in a styled card
// If availability is false, show an out-of-stock message
// Try passing data from a parent component

const Product = ({title,price,availability}) => {
    let card= {
        border:"1px solid black",
        padding:"15px",
        borderRadius:"10px",
        width:"250px",
        marginBottom:"15px",
        backgroundColor:"lightgray",
      }
    return (
      <div style={card}>
        <h2>{title}</h2>
        <p>Price: ₹{price}</p>
        {availability ? (
          <p style={{ color: "green" }}>available</p>
        ) : (
          <p style={{ color: "red" }}>out of stock</p>
        )}
      </div>
    );
  };
  
export default Product;
  
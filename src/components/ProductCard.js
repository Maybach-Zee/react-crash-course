/* eslint-disable no-unused-vars */
function ProductCard({product, onPurchase, background ="slategray"}) {


   
  return (
    <article style={{ 
      background,
      width: "100%",
      border: "1px solid white", 
      borderRadius: "8px", 
      padding: "16px", 
      textAlign: "center" }}>

      <h2>{product.name}</h2>

      <img 
      src={product.imageSrc}
      alt={product.name}
      width="128px"
      height="150px"
       />

      <p>Specifications:</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {product.specifications.map((spec, index) => (

        <li key={index}>{spec}</li>
        
        ))}
        
      </ul>
      <Status stockCount={product.stockCount} />

        {product.stockCount > 0 &&(
      <button onClick={() => onPurchase(product)}>Buy (From R{product.price})</button>
        )}

    </article>
    
  );

  function Status({ stockCount }) {  
    
    const notAvailableTemplate = (
       <p style={{fontSize: "14px", color: "lightsalmon"}}> Not Available</p>
    );
    
    const availableTemplate = (
       <p style={{fontSize: "14px", color: "lightgreen"}}> 
       {stockCount} Items Available</p>
    );

    return stockCount === 0 ? notAvailableTemplate : availableTemplate;
    

  }
   
}
export default ProductCard;
import React from 'react'
//import './App.css';

const ProductGrid=({products,addToCart})=>(
  <div className="wrapper">
   {products.map(product=>(
     <div className="product-wrapper" key={product._id}>
       <div >
          <img className="product-image" src={product.picture} alt="text"/>
       </div>
       <div className="product-name">
        {product.name}
        <button onClick={()=>addToCart(product)}>add to cart</button>
       </div>
     </div>
   ))}

  </div>
)


export default ProductGrid
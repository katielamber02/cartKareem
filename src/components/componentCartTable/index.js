import React from 'react'


const CartTable=({cart})=>(
 <table>
 <thead>
   <tr>
     <th> Item Name </th>
     <th> Item Price </th>
     <th> Item Quantity</th>
   </tr>
 </thead>
 <tbody>
   {cart.items.map(item=>(
     <tr key={item.productId}>
       <td>{item.product.name}</td>
       <td>{item.product.price}</td>
       <td>{item.quantity}</td>
     </tr>
   ))}
 </tbody>
 </table>
)
export default CartTable
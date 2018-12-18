const saveToLocalStorage=(cart)=>{
  localStorage.setItem('cart',JSON.stringify(cart))
}

const getFromLocalStorage=()=>{
  const emptyCart={items:[]}
  const cart=JSON.parse(localStorage.getItem('cart'))
  return cart || emptyCart
}
//console.log('cart',getFromLocalStorage())

/*
saveToLocalStorage({
  items:[
    {productId:"599598ac5c2e3bf27c004a79",quantity:3},

  ]
})
*/

export const fetch=async()=>getFromLocalStorage()

export const addCartItem = async(productId,quantity=1)=>{
  const cart=await fetch()
  const exist=cart.items.findIndex(item=>item.productId===productId) > -1;
  
  if(exist){
    throw{
      message:'Item already exist'
    }
  }
  
 
  const newItem={productId,quantity}
  const newCart={
    ...cart,
    items:[
      ...cart.items,
      newItem
    ]
  }
  saveToLocalStorage(newCart)
     return newCart
}
 //addToCart("599598aced479eec77c4c7ee",5)
 //console.log('cart',getFromLocalStorage())
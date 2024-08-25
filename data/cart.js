 export const Cart = [];

 export function addToCart(productId){
    let matchingItem;
      Cart.forEach((cartItem) =>{
        if(productId === cartItem.productId){
          matchingItem = cartItem;
        }
        
      });
      if(matchingItem){
        matchingItem.quantity += 1;
      }
      else{
        Cart.push({
          productId: productId,
          quantity: 1
        });
  
      }
  }

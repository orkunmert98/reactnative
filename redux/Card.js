export const additem=(item)=>(
    {
type:"additem",
payload:item
    }
)


export const removeitem=(item)=>(
{
type:"removeitem",
payload:item

}
)
export const removefull=()=>(
    {
        type:"removeall",
        
    }
)



/**  utils*/


 const Calculate = (payload) => {
let Total

 
  
  
  };
  
   const removeItemFromCart = (cartItems, cartItemToRemove) => {
   
  
  
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  
  };



/* ınıtal_state */

const INITIAL_STATE = {
    total:0,
    cartItems: []
  };
  



  /* reducers */
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
     
      case "additem":
        return {
          ...state,
          total:state.total+action.payload.itemprice,
          cartItems:[...state.cartItems, { ...action.payload}]
        };
      case "removeitem":
        return {
          ...state,
          total:state.total-action.payload.itemprice,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        };
        case "removeall":
          return {
            ...state,
            total:0,
            cartItems: []
          };
      default:
        return state;
    }
  };
  
  export default cartReducer;
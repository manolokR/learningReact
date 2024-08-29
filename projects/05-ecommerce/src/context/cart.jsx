import { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart.js'

// Create a Context for the cart
export const CartContext = createContext()


// Custom hook that manages the cart's state using useReducer
function useCartReducer () {
  // useReducer hook to manage the cart's state based on the cartReducer function and initial state
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  // Function to add a product to the cart, dispatching an action of type 'ADD_TO_CART'
  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  // Function to remove a product from the cart, dispatching an action of type 'REMOVE_FROM_CART'
  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  // Function to clear the cart, dispatching an action of type 'CLEAR_CART'
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  // Return the current state and the functions to modify it
  return { state, addToCart, removeFromCart, clearCart }
}



// Component that provides the cart context to its children
export function CartProvider ({ children }) {
  // Get the cart state and actions from the custom hook
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  // Provide the cart state and actions to the context, making them available to any component in the tree
  return (
    <CartContext.Provider value={{
      cart: state,    
      addToCart,       
      removeFromCart,  
      clearCart        
    }}
    >
      {children} 
    </CartContext.Provider>
  )
}

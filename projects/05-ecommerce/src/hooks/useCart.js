import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export const useCart = () => {
  const context = useContext(CartContext)

  // Check if the context is defined, if not throw an error
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
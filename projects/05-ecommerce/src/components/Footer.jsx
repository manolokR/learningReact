import './Footer.css'
import { useFilters } from '../hooks/useFilters.js'
import { useCart } from '../hooks/useCart.js'
export function Footer() {

  const { filters } = useFilters()
  const { cart } = useCart()


  return (
    <footer className='footer'>
      <h5>Shopping Cart with useContext & useReducer</h5>
    </footer>
  )
}
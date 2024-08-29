import './Footer.css'
import { useFilters } from '../hooks/useFilters.js'
export function Footer () {

 const { filters } = useFilters()

  return (
<footer className='footer'>
    {

        JSON.stringify(filters, null, 2)
    }
    
</footer>    

    // <footer className='footer'>
    //   <h5>Shopping Cart with useContext & useReducer</h5>
    // </footer>
  )
}
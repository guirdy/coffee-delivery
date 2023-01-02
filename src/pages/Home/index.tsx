import { useContext } from 'react'
import { ShopContext } from '../../context/ShopProvider'

export function Home() {
  const cart = useContext(ShopContext)

  return (
    <button onClick={cart.handleSetShoppingCartItems}>
      {cart.shoppingCartItems}
    </button>
  )
}

import { useNavigate } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, HeaderContent, Location } from './styles'

import logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopProvider'

export function Header() {
  const cart = useContext(ShopContext)
  const navigate = useNavigate()

  const totalItemsInTheCart = cart.coffeesInCart.reduce(
    (total, coffees) => total + coffees.amount,
    0,
  )

  const handleNavigate = () => {
    navigate('/cart')
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="Coffee Logotipo" />

        <div>
          <Location>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Location>
          <button onClick={handleNavigate}>
            <ShoppingCart size={22} weight="fill" />
            {totalItemsInTheCart > 0 && <span>{totalItemsInTheCart}</span>}
          </button>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}

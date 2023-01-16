import { useContext } from 'react'
import { CardCoffeeCart } from '../../components/CardCoffeeCart'
import { ShopContext } from '../../context/ShopProvider'
import {
  CartContainer,
  GridContent,
  FormAddress,
  CartContent,
  ContainerTitle,
  CardDefault,
  CoffeesCard,
  Divider,
} from './styles'

export function Cart() {
  const cart = useContext(ShopContext)

  return (
    <CartContainer>
      <GridContent>
        <FormAddress>
          <ContainerTitle>Complete seu pedido</ContainerTitle>
          <CardDefault></CardDefault>
          <CardDefault></CardDefault>
        </FormAddress>
        <CartContent>
          <ContainerTitle>Cafés selecionados</ContainerTitle>
          <CoffeesCard>
            {cart.coffeesInCart.map((coffee) => (
              <div key={coffee.coffeeData.id}>
                <CardCoffeeCart coffee={coffee} />
                <Divider />
              </div>
            ))}
          </CoffeesCard>
        </CartContent>
      </GridContent>
    </CartContainer>
  )
}

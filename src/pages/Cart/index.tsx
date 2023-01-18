import { useContext } from 'react'
import { CardCoffeeCart } from '../../components/CardCoffeeCart'
import { ShopContext } from '../../context/ShopProvider'
import { currencyBRL } from '../../utils/currency'
import {
  CartContainer,
  GridContent,
  FormAddress,
  CartContent,
  ContainerTitle,
  CardDefault,
  CoffeesCard,
  Divider,
  TotalContainer,
  TotalItems,
  Delivery,
  TotalPrice,
  ConfirmButton,
} from './styles'

const DELIVERY_PRICE = 3.5

export function Cart() {
  const cart = useContext(ShopContext)

  const totalPriceOfTheCart = cart.coffeesInCart.reduce(
    (total, coffees) => total + coffees.coffeeData.price * coffees.amount,
    0,
  )

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

            {!!cart.coffeesInCart.length && (
              <TotalContainer>
                <TotalItems>
                  <span>Total de itens</span>
                  <span>{currencyBRL(totalPriceOfTheCart)}</span>
                </TotalItems>
                <Delivery>
                  <span>Entrega</span>
                  <span>{currencyBRL(DELIVERY_PRICE)}</span>
                </Delivery>
                <TotalPrice>
                  <strong>Total</strong>
                  <strong>
                    {currencyBRL(totalPriceOfTheCart + DELIVERY_PRICE)}
                  </strong>
                </TotalPrice>

                <ConfirmButton
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                >
                  Confirmar pedido
                </ConfirmButton>
              </TotalContainer>
            )}
          </CoffeesCard>
        </CartContent>
      </GridContent>
    </CartContainer>
  )
}

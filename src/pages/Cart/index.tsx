import { MapPinLine } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { CardCoffeeCart } from '../../components/CardCoffeeCart'
import { PurchaseData, ShopContext } from '../../context/ShopProvider'
import { currencyBRL } from '../../utils/currency'
import { notify } from '../../utils/toasty'
import {
  FormContainer,
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
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  PaymentOptionButton,
} from './styles'

const DELIVERY_PRICE = 3.5

const PAYMENT_OPTIONS = ['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro']

interface Inputs {
  cep: string
  street: string
  number: number
  complement: string
  district: string
  city: string
  uf: string
}

export function Cart() {
  const cart = useContext(ShopContext)

  const { register, handleSubmit, reset } = useForm<Inputs>()

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<number>(-1)

  const totalPriceOfTheCart = cart.coffeesInCart.reduce(
    (total, coffees) => total + coffees.coffeeData.price * coffees.amount,
    0,
  )

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (selectedPaymentMethod < 0) {
      return notify('Selecione uma forma de pagamento', 'error')
    }

    const purchaseData: PurchaseData = {
      coffees: cart.coffeesInCart,
      address: data,
      paymentOption: PAYMENT_OPTIONS[selectedPaymentMethod],
    }

    cart.handlePurchaseData(purchaseData)
    cart.clearCoffeesInCart()
    setSelectedPaymentMethod(-1)
    reset()
    notify('Compra realizada com sucesso', 'success')
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <GridContent>
        <FormAddress>
          <ContainerTitle>Complete seu pedido</ContainerTitle>
          <CardDefault>
            <div>
              <MapPinLine size={22} weight="thin" />
              <div>
                <h1>Endereço de Entrega</h1>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <FirstColumn>
              <input
                type="text"
                required
                placeholder="CEP"
                {...register('cep', { required: true })}
              />
              <input
                type="text"
                required
                placeholder="Rua"
                {...register('street', { required: true })}
              />
            </FirstColumn>
            <SecondColumn>
              <input
                type="text"
                required
                placeholder="Número"
                {...register('number', { required: true })}
              />
              <input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
            </SecondColumn>
            <ThirdColumn>
              <input
                type="text"
                placeholder="Bairro"
                {...register('district', { required: true })}
              />
              <input
                type="text"
                required
                placeholder="Cidade"
                {...register('city', { required: true })}
              />
              <input
                type="text"
                required
                placeholder="UF"
                maxLength={2}
                {...register('uf', { required: true })}
              />
            </ThirdColumn>
          </CardDefault>
          <CardDefault>
            <div>
              {PAYMENT_OPTIONS.map((option, index) => (
                <PaymentOptionButton
                  key={option}
                  type="button"
                  selectedOption={index === selectedPaymentMethod}
                  onClick={() => setSelectedPaymentMethod(index)}
                >
                  {option}
                </PaymentOptionButton>
              ))}
            </div>
          </CardDefault>
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

                <ConfirmButton type="submit">Confirmar pedido</ConfirmButton>
              </TotalContainer>
            )}
          </CoffeesCard>
        </CartContent>
      </GridContent>
    </FormContainer>
  )
}

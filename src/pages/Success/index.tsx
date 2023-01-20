import { useContext, useEffect } from 'react'
import { ShopContext } from '../../context/ShopProvider'
import {
  CongratsMessage,
  Delivery,
  DeliveryData,
  LocationIcon,
  PaymentIcon,
  PurchaseContainer,
  TimeIcon,
} from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import delivery from '../../assets/delivery.svg'
import { useNavigate } from 'react-router-dom'

export function Success() {
  const cart = useContext(ShopContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!cart.purchaseData) {
      return navigate('/')
    }
  }, [])

  return (
    <>
      <CongratsMessage>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </CongratsMessage>

      <PurchaseContainer>
        <Delivery>
          <DeliveryData>
            <LocationIcon>
              <MapPin size={32} weight="fill" />
            </LocationIcon>
            <p>
              Entrega em{' '}
              <strong>
                {cart.purchaseData?.address.street},{' '}
                {cart.purchaseData?.address.number}
              </strong>
              <br />
              {cart.purchaseData?.address.district} -{' '}
              {cart.purchaseData?.address.city},{' '}
              <span>{cart.purchaseData?.address.uf}</span>
            </p>
          </DeliveryData>

          <DeliveryData>
            <TimeIcon>
              <Timer size={32} weight="fill" />
            </TimeIcon>
            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </DeliveryData>

          <DeliveryData>
            <PaymentIcon>
              <CurrencyDollar size={32} weight="fill" />
            </PaymentIcon>
            <p>
              Pagamento na entrega
              <br />
              <strong>{cart.purchaseData?.paymentOption}</strong>
            </p>
          </DeliveryData>
        </Delivery>
        <img src={delivery} alt="delivery" />
      </PurchaseContainer>
    </>
  )
}

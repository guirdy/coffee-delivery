import {
  CartContainer,
  GridContent,
  FormAddress,
  CartContent,
  ContainerTitle,
  CardDefault,
  CoffeesCard,
} from './styles'

export function Cart() {
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
          <CoffeesCard></CoffeesCard>
        </CartContent>
      </GridContent>
    </CartContainer>
  )
}

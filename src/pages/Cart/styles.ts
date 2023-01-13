import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 54px 0 108px;
`
export const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const FormAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const CardDefault = styled.div`
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const CoffeesCard = styled.div`
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 448px;

  @media (max-width: 760px) {
    max-width: 100%;
  }
`

export const ContainerTitle = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  align-items: center;
  color: ${(props) => props.theme['base-subtitle']};
`

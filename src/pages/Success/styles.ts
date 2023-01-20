import styled from 'styled-components'

export const CongratsMessage = styled.div`
  margin: 54px 0 40px;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`

export const PurchaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    max-width: 492px;
  }

  @media (max-width: 840px) {
    img {
      display: none;
    }
  }
`

export const Delivery = styled.div`
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  padding: 40px;

  div:last-child {
    margin-bottom: 0;
  }
`

export const DeliveryData = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};

    span {
      text-transform: uppercase;
    }
  }
`

export const LocationIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  color: ${(props) => props.theme.white};

  width: 32px;
  height: 32px;

  background: ${(props) => props.theme.purple};
  border-radius: 1000px;
`

export const TimeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  color: ${(props) => props.theme.white};

  width: 32px;
  height: 32px;

  background: ${(props) => props.theme.yellow};
  border-radius: 1000px;
`

export const PaymentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  color: ${(props) => props.theme.white};

  width: 32px;
  height: 32px;

  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 1000px;
`

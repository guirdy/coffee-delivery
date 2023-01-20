import styled from 'styled-components'

interface StyledProps {
  selectedOption: boolean
}

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 54px 0 108px;
`
export const GridContent = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`

export const FormAddress = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 32px;
  width: 100%;
  max-width: 640px;

  input {
    padding: 12px;

    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
  margin-top: 32px;

  input:first-child {
    max-width: 200px;
    width: 100%;
  }

  input:last-child {
    width: 100%;
  }
`
export const SecondColumn = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;

  input:first-child {
    max-width: 200px;
    width: 100%;
  }

  input:last-child {
    width: 100%;
  }
`
export const ThirdColumn = styled.div`
  display: flex;
  gap: 4px;

  input:first-child {
    max-width: 200px;
    width: 100%;
  }

  input + input {
    width: 100%;
  }

  input:last-child {
    max-width: 60px;
    width: 100%;
    text-transform: uppercase;
  }
`

export const CardDefault = styled.div`
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  > div {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;

    > div {
      h1 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
      }

      p {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-text']};
      }
    }

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const CoffeesCard = styled.div`
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 56px;
  }
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

export const Divider = styled.div`
  width: 100%;
  margin: 24px auto;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TotalItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;

  span {
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }

  span:first-child {
    font-size: 0.875rem;
    text-align: start;
  }

  span:last-child {
    font-size: 1rem;
    text-align: right;
  }
`

export const Delivery = styled(TotalItems)``

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;

  strong {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  strong:last-child {
    text-align: right;
  }
`

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  line-height: 160%;
  width: 100%;

  font-weight: 700;
  font-size: 0.875rem;
  font-stretch: 100;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};
  border-radius: 6px;
  border: none;

  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 32px;
`
// color: `${(props) => props.theme.purple}
export const PaymentOptionButton = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
  text-align: left;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  border: ${(props) => (props.selectedOption ? '1px solid #8047F8' : 'none')};

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple} !important;
  }

  > span {
    font-size: 0.75rem;
    line-height: 160%;

    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`

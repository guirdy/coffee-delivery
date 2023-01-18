import styled from 'styled-components'

export const CardSelectedCoffee = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  > strong {
    display: block;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    text-align: right;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 520px) {
    flex-direction: column;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  > img {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 395px) {
    flex-direction: column;
  }
`

export const CoffeeData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > h1 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
  }
`

export const EditQt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px;
  max-width: 72px;
  width: 100%;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};
  }

  > span {
    display: block;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px;
  text-transform: uppercase;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: none;

  transition: background 0.2s;
  cursor: pointer;

  > svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

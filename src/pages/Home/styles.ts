import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 56px;
  width: 100%;
  margin: 94px 0 108px;

  > div {
    > h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-title']};
    }

    > h2 {
      margin-top: 16px;
      font-stretch: 100;
      font-style: normal;
      font-weight: 400;
      font-size: 1.625rem;
      line-height: 130%;
      margin-bottom: 66px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 44px;

    > img {
      max-width: 320px;
    }
  }
`

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 16px;
  align-items: flex-start;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: 0;

  > p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ShopIcon = styled.div`
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

export const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  color: ${(props) => props.theme.white};

  width: 32px;
  height: 32px;

  background: ${(props) => props.theme['base-text']};
  border-radius: 1000px;
`

export const ClockIcon = styled.div`
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

export const CoffeeIcon = styled.div`
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

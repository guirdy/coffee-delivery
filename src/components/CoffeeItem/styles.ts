import styled from 'styled-components'

export const Tags = styled.div`
  display: flex;
  width: 100%;
  margin-top: 12px;
  gap: 4px;
  align-items: center;
  justify-content: center;

  span {
    padding: 4px 8px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;
  }
`

export const CoffeeCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 16px;
  max-width: 256px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 120px;
    height: 120px;
    margin-top: -40px;
  }

  > h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 16px auto 8px;
    text-align: center;
  }

  > p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    margin-bottom: 33px;
    color: ${(props) => props.theme['base-label']};
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 0 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    > span {
      display: block;
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;

      text-align: right;

      color: ${(props) => props.theme['base-text']};
    }

    > strong {
      display: block;
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;

      text-align: right;

      color: ${(props) => props.theme['base-text']};
    }
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    input {
      padding: 8px;

      max-width: 72px;
      width: 100%;
      height: 38px;

      background: ${(props) => props.theme['base-button']};
      border-radius: 6px;
      border: none;

      text-align: center;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;

      width: 38px;
      height: 38px;

      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['purple-dark']};
      border-radius: 6px;
      border: none;

      cursor: pointer;
    }
  }
`

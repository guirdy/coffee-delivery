import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > button {
      position: relative;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      padding: calc(10px);
      border: none;
      cursor: pointer;
      border-radius: 6px;

      > span {
        position: absolute;
        right: -8.35px;
        top: -8px;
        width: 20px;
        height: 20px;
        padding: 3px;
        font-size: 0.75rem;
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme['yellow-dark']};
        font-weight: 700;
        border-radius: 1000px;
      }
    }
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  max-width: 160px;
  width: 100%;
  gap: 7px;
  background: ${(props) => props.theme['purple-light']};
  padding: 12px;
  font-size: 0.875rem;
  border-radius: 6px;
  color: ${(props) => props.theme['purple-dark']};

  span {
    display: block;
  }
`

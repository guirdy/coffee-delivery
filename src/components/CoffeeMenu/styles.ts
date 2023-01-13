import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  align-items: center;
  justify-items: center;
  margin-top: 54px;
  margin-bottom: 104px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

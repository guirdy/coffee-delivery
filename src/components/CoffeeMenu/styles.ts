import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

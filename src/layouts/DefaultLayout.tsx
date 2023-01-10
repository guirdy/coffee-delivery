import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

import { Wrapper, LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </LayoutContainer>
    </>
  )
}

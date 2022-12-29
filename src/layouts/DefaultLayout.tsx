import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <div>Header</div>
      <Outlet />
    </LayoutContainer>
  )
}

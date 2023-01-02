import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ShopProvider } from './context/ShopProvider'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShopProvider>
          <Router />
        </ShopProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

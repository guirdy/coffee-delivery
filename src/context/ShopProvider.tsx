import { createContext, ReactNode, useState } from 'react'

interface ShopContextTypes {
  shoppingCartItems: number
  handleSetShoppingCartItems: () => void
}

interface ShopProviderProps {
  children: ReactNode
}

export const ShopContext = createContext({} as ShopContextTypes)

export const ShopProvider = ({ children }: ShopProviderProps) => {
  const [shoppingCartItems, setShoppingCartItems] = useState(0)

  const handleSetShoppingCartItems = () => {
    setShoppingCartItems(shoppingCartItems + 1)
  }

  return (
    <ShopContext.Provider
      value={{
        shoppingCartItems,
        handleSetShoppingCartItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

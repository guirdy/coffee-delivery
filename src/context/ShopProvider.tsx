import { createContext, ReactNode, useReducer } from 'react'
import { Option } from '../db/menu'
import {
  addCoffeeInCartAction,
  clearCoffeesInCartAction,
  deleteCoffeeInCartByIdAction,
  updateCoffeeInCartByIdAction,
} from '../reducers/actions'
import { coffeesInCartReducer } from '../reducers/reducer'

export interface ICoffee {
  coffeeData: Option
  amount: number
}

interface ShopContextTypes {
  coffeesInCart: ICoffee[]
  addCoffeeInCart: (coffeeData: Option, amount: number) => void
  updateCoffeeInCartById: (id: string, amount: number) => void
  deleteCoffeeInCartById: (id: string) => void
  clearCoffeesInCart: () => void
}

interface ShopProviderProps {
  children: ReactNode
}

export const ShopContext = createContext({} as ShopContextTypes)

export const ShopProvider = ({ children }: ShopProviderProps) => {
  const [coffeesInCart, dispatch] = useReducer(
    coffeesInCartReducer,
    [] as ICoffee[],
  )

  function addCoffeeInCart(coffeeData: Option, amount: number) {
    const cartItem: ICoffee = {
      coffeeData,
      amount,
    }

    dispatch(addCoffeeInCartAction(cartItem))
  }

  function updateCoffeeInCartById(id: string, amount: number) {
    dispatch(updateCoffeeInCartByIdAction(id, amount))
  }

  function deleteCoffeeInCartById(id: string) {
    dispatch(deleteCoffeeInCartByIdAction(id))
  }

  function clearCoffeesInCart() {
    dispatch(clearCoffeesInCartAction())
  }

  return (
    <ShopContext.Provider
      value={{
        coffeesInCart,
        addCoffeeInCart,
        updateCoffeeInCartById,
        deleteCoffeeInCartById,
        clearCoffeesInCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

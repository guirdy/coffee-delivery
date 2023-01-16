import { createContext, ReactNode, useReducer } from 'react'
import { Option } from '../db/menu'
import {
  addCoffeeInCartAction,
  clearCoffeesInCartAction,
  deleteCoffeeInCartByIdAction,
  decreaseCoffeeInCartByIdAction,
  increaseCoffeeInCartByIdAction,
} from '../reducers/actions'
import { coffeesInCartReducer } from '../reducers/reducer'

export interface ICoffee {
  coffeeData: Option
  amount: number
}

interface ShopContextTypes {
  coffeesInCart: ICoffee[]
  addCoffeeInCart: (coffeeData: Option, amount: number) => void
  decreaseCoffeeInCartById: (id: number) => void
  increaseCoffeeInCartById: (id: number) => void
  deleteCoffeeInCartById: (id: number) => void
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

  function decreaseCoffeeInCartById(id: number) {
    dispatch(decreaseCoffeeInCartByIdAction(id))
  }

  function increaseCoffeeInCartById(id: number) {
    dispatch(increaseCoffeeInCartByIdAction(id))
  }

  function deleteCoffeeInCartById(id: number) {
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
        decreaseCoffeeInCartById,
        deleteCoffeeInCartById,
        increaseCoffeeInCartById,
        clearCoffeesInCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

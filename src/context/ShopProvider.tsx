import { createContext, ReactNode, useReducer, useState } from 'react'
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

export interface PurchaseData {
  coffees: ICoffee[]
  address: {
    cep: string
    street: string
    number: number
    complement: string
    district: string
    city: string
    uf: string
  }
  paymentOption: string
}

interface ShopContextTypes {
  coffeesInCart: ICoffee[]
  purchaseData: PurchaseData | null
  addCoffeeInCart: (coffeeData: Option, amount: number) => void
  decreaseCoffeeInCartById: (id: number) => void
  increaseCoffeeInCartById: (id: number) => void
  deleteCoffeeInCartById: (id: number) => void
  clearCoffeesInCart: () => void
  handlePurchaseData: (data: PurchaseData) => void
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

  const [purchaseData, setPurchaseData] = useState<PurchaseData | null>(null)

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
        purchaseData,
        addCoffeeInCart,
        decreaseCoffeeInCartById,
        deleteCoffeeInCartById,
        increaseCoffeeInCartById,
        clearCoffeesInCart,
        handlePurchaseData: (purchaseData: PurchaseData) => {
          setPurchaseData(purchaseData)
        },
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

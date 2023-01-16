import { ICoffee } from '../context/ShopProvider'

export enum ActionTypes {
  DELETE_COFFEE_IN_CART_BY_ID = 'DELETE_COFFEE_IN_CART_BY_ID',
  ADD_COFFEE_IN_CART = 'ADD_COFFEE_IN_CART',
  DECREASE_COFFEE_IN_CART_BY_ID = 'DECREASE_COFFEE_IN_CART_BY_ID',
  INCREASE_COFFEE_IN_CART_BY_ID = 'INCREASE_COFFEE_IN_CART_BY_ID',
  CLEAR_COFFEES_IN_CART = 'CLEAR_COFFEES_IN_CART',
}

export function addCoffeeInCartAction(coffee: ICoffee) {
  return {
    type: ActionTypes.ADD_COFFEE_IN_CART,
    payload: {
      coffee,
    },
  }
}

export function decreaseCoffeeInCartByIdAction(id: number) {
  return {
    type: ActionTypes.DECREASE_COFFEE_IN_CART_BY_ID,
    payload: {
      id,
    },
  }
}

export function increaseCoffeeInCartByIdAction(id: number) {
  return {
    type: ActionTypes.INCREASE_COFFEE_IN_CART_BY_ID,
    payload: {
      id,
    },
  }
}

export function deleteCoffeeInCartByIdAction(id: number) {
  return {
    type: ActionTypes.DELETE_COFFEE_IN_CART_BY_ID,
    payload: {
      coffeeId: id,
    },
  }
}

export function clearCoffeesInCartAction() {
  return {
    type: ActionTypes.CLEAR_COFFEES_IN_CART,
  }
}

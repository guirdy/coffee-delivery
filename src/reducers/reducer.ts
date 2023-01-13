import { ICoffee } from '../context/ShopProvider'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export function coffeesInCartReducer(state: ICoffee[], action: any) {
  switch (action.type) {
    case ActionTypes.DELETE_COFFEE_IN_CART_BY_ID:
      return state.filter(
        (coffee) =>
          coffee.coffeeData.id !== action.payload.coffee.coffeeData.id,
      )
    case ActionTypes.ADD_COFFEE_IN_CART:
      return produce(state, (draft) => {
        const indexDraft = draft.findIndex((draft) => {
          return draft.coffeeData.id === action.payload.coffee.coffeeData.id
        })

        console.log(indexDraft)

        if (indexDraft > -1) {
          draft[indexDraft].amount = draft[indexDraft].amount +=
            action.payload.coffee.amount
        } else {
          draft.push(action.payload.coffee)
        }
      })

    case ActionTypes.UPDATE_COFFEE_IN_CART_BY_ID:
      return state.map((coffee) => {
        if (coffee.coffeeData.id === action.payload.coffee.coffeeData.id) {
          return { ...coffee, amount: action.payload.amount }
        }
        return coffee
      })
    case ActionTypes.CLEAR_COFFEES_IN_CART:
      return []
    default:
      return state
  }
}

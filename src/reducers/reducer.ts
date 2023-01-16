import { ICoffee } from '../context/ShopProvider'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export function coffeesInCartReducer(state: ICoffee[], action: any) {
  switch (action.type) {
    case ActionTypes.DELETE_COFFEE_IN_CART_BY_ID:
      return produce(state, (draft) => {
        const indexDraft = draft.findIndex((draft) => {
          return draft.coffeeData.id === action.payload.id
        })

        if (indexDraft > -1) {
          draft.splice(indexDraft, 1)
        }
      })
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

    case ActionTypes.DECREASE_COFFEE_IN_CART_BY_ID:
      return produce(state, (draft) => {
        const indexDraft = draft.findIndex((draft) => {
          return draft.coffeeData.id === action.payload.id
        })

        if (indexDraft > -1) {
          if (draft[indexDraft].amount > 1) {
            draft[indexDraft].amount -= 1
          }
        }
      })

    case ActionTypes.INCREASE_COFFEE_IN_CART_BY_ID:
      return produce(state, (draft) => {
        const indexDraft = draft.findIndex((draft) => {
          return draft.coffeeData.id === action.payload.id
        })

        if (indexDraft > -1) {
          draft[indexDraft].amount += 1
        }
      })

    case ActionTypes.CLEAR_COFFEES_IN_CART:
      return []
    default:
      return state
  }
}

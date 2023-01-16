import { Minus, Plus, Trash } from 'phosphor-react'
import { MouseEvent, useContext } from 'react'
import { ICoffee, ShopContext } from '../../context/ShopProvider'
import { currencyBRL } from '../../utils/currency'
import {
  CardSelectedCoffee,
  CoffeeInfo,
  CoffeeData,
  EditQt,
  RemoveButton,
} from './styles'

interface CardCoffeeCartProps {
  coffee: ICoffee
}

export function CardCoffeeCart({ coffee }: CardCoffeeCartProps) {
  const cartContext = useContext(ShopContext)

  const coffeeTotal = coffee.coffeeData.price * coffee.amount

  const handleDecreaseCoffeeQt = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    id: number,
  ) => {
    console.log(id)
    cartContext.decreaseCoffeeInCartById(id)
  }

  const handleIncreaseCoffeeQt = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    id: number,
  ) => {
    console.log(id)
    cartContext.increaseCoffeeInCartById(id)
  }

  return (
    <CardSelectedCoffee>
      <CoffeeInfo>
        <img
          src={`/menu/${coffee.coffeeData.id}.svg`}
          alt={coffee.coffeeData.title}
        />
        <CoffeeData>
          <h1>{coffee.coffeeData.title}</h1>
          <div>
            <EditQt>
              <button
                onClick={(e) => handleDecreaseCoffeeQt(e, coffee.coffeeData.id)}
              >
                <Minus size={14} weight="thin" />
              </button>
              <span>{coffee.amount}</span>
              <button
                onClick={(e) => handleIncreaseCoffeeQt(e, coffee.coffeeData.id)}
              >
                <Plus size={14} weight="thin" />
              </button>
            </EditQt>

            <RemoveButton>
              <Trash size={16} weight="thin" />
              Remover
            </RemoveButton>
          </div>
        </CoffeeData>
      </CoffeeInfo>
      <strong>{currencyBRL(coffeeTotal)}</strong>
    </CardSelectedCoffee>
  )
}

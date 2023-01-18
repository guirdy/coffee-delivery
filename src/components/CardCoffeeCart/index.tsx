import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
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

  const handleDecreaseCoffeeQt = (id: number) => {
    cartContext.decreaseCoffeeInCartById(id)
  }

  const handleIncreaseCoffeeQt = (id: number) => {
    cartContext.increaseCoffeeInCartById(id)
  }

  const handleRemoveCoffee = (id: number) => {
    cartContext.deleteCoffeeInCartById(id)
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
                type="button"
                onClick={() => handleDecreaseCoffeeQt(coffee.coffeeData.id)}
              >
                <Minus size={14} weight="thin" />
              </button>
              <span>{coffee.amount}</span>
              <button
                type="button"
                onClick={() => handleIncreaseCoffeeQt(coffee.coffeeData.id)}
              >
                <Plus size={14} weight="thin" />
              </button>
            </EditQt>

            <RemoveButton
              onClick={() => handleRemoveCoffee(coffee.coffeeData.id)}
            >
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

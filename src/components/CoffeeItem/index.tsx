import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { FormEvent, useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopProvider'
import { Option } from '../../db/menu'
import { notify } from '../../utils/toasty'

import {
  CoffeeCard,
  Tags,
  FormContainer,
  CoffeeQt,
  QtButton,
  SubmitButton,
} from './styles'

interface CoffeeItemProps {
  option: Option
}

export function CoffeeItem({ option }: CoffeeItemProps) {
  const cartContext = useContext(ShopContext)

  const [amount, setAmount] = useState<number>(0)

  const handleAddToCart = (
    e: FormEvent<HTMLFormElement>,
    coffeeData: Option,
  ) => {
    e.preventDefault()
    cartContext.addCoffeeInCart(coffeeData, amount)
    setAmount(0)
    notify('Café adicionado no carrinho!', 'success')
  }

  const handleIncreaseSetAmount = () => {
    setAmount((state) => {
      return (state += 1)
    })
  }

  const handleDecreaseSetAmount = () => {
    setAmount((state) => {
      if (state === 0) {
        return state
      }

      return (state -= 1)
    })
  }

  return (
    <CoffeeCard key={option.title}>
      <img src={`/menu/${option.id}.svg`} alt="coffee" />
      <Tags>
        {option.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <h2>{option.title}</h2>
      <p>{option.description}</p>
      <FormContainer>
        <div>
          <span>R$</span>
          <strong>{Number(option.price).toFixed(2).replace('.', ',')}</strong>
        </div>
        <form onSubmit={(e) => handleAddToCart(e, option)}>
          <CoffeeQt>
            <QtButton type="button" onClick={handleDecreaseSetAmount}>
              <Minus size={14} weight="thin" />
            </QtButton>
            <input
              name={String(option.id)}
              type="number"
              min={1}
              max={99}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              required
            />
            <QtButton type="button" onClick={handleIncreaseSetAmount}>
              <Plus size={14} weight="thin" />
            </QtButton>
          </CoffeeQt>
          <SubmitButton type="submit">
            <ShoppingCartSimple weight="fill" />
          </SubmitButton>
        </form>
      </FormContainer>
    </CoffeeCard>
  )
}

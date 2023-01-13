import { ShoppingCartSimple } from 'phosphor-react'
import { FormEvent, useContext, useState } from 'react'
import { ICoffee, ShopContext } from '../../context/ShopProvider'
import { Option } from '../../db/menu'

import { CoffeeCard, Tags, FormContainer } from './styles'

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
    console.log(cartContext.coffeesInCart)
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
          <input
            name={String(option.id)}
            type="number"
            min={1}
            max={99}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
          />
          <button type="submit">
            <ShoppingCartSimple weight="fill" />
          </button>
        </form>
      </FormContainer>
    </CoffeeCard>
  )
}

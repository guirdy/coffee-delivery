import { menuOptions } from '../../db/menu'
import { Title } from './styles'

export function CoffeeMenu() {
  return (
    <>
      <Title>Nossos cafés</Title>

      {menuOptions.map((option) => (
        <div key={option.title}>
          <img src={`/menu/${option.id}.svg`} alt="coffee" />
          {option.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          <h2>{option.title}</h2>
          <p>{option.description}</p>
          <div>
            <strong>R$ {option.price}</strong>
            <form>
              <input type="number" min={0} max={99} required />
              <button type="submit">:P</button>
            </form>
          </div>
        </div>
      ))}
    </>
  )
}

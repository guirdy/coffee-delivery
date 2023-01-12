import { menuOptions } from '../../db/menu'
import { Title, MenuContainer } from './styles'
import { CoffeeItem } from '../CoffeeItem'

export function CoffeeMenu() {
  return (
    <>
      <Title>Nossos cafés</Title>
      <MenuContainer>
        {menuOptions.map((option) => (
          <CoffeeItem key={option.id} option={option} />
        ))}
      </MenuContainer>
    </>
  )
}

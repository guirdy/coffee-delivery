import { useContext } from 'react'
import { ShopContext } from '../../context/ShopProvider'
import {
  Header,
  GridContent,
  ShopIcon,
  GridItem,
  BoxIcon,
  ClockIcon,
  CoffeeIcon,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import CoffeeImg from '../../assets/coffee.svg'
import { CoffeeMenu } from '../../components/CoffeeMenu'

const GRID_ITEMS = [
  {
    title: 'Compra simples e segura',
    icon: (
      <ShopIcon>
        <ShoppingCart size={32} weight="fill" />
      </ShopIcon>
    ),
  },
  {
    title: 'Embalagem mantém o café intacto',
    icon: (
      <BoxIcon>
        <Package size={32} weight="fill" />
      </BoxIcon>
    ),
  },
  {
    title: 'Entrega rápida e rastreada',
    icon: (
      <ClockIcon>
        <Timer size={32} weight="fill" />
      </ClockIcon>
    ),
  },
  {
    title: 'O café chega fresquinho até você',
    icon: (
      <CoffeeIcon>
        <Coffee size={32} weight="fill" />
      </CoffeeIcon>
    ),
  },
]

export function Home() {
  const cart = useContext(ShopContext)

  return (
    <>
      <Header>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <GridContent>
            {GRID_ITEMS.map((item) => (
              <GridItem key={item.title}>
                {item.icon}
                <p>{item.title}</p>
              </GridItem>
            ))}
          </GridContent>
        </div>
        <img src={CoffeeImg} alt="Coffee" />
      </Header>
      <CoffeeMenu />
    </>
  )
}

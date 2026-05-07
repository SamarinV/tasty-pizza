import MenuListItem from './menu-list-item/menu-list-item'
import s from './menu-list.module.scss'
import { products } from '../../data/products'
import type { CategoryType } from '../../types/types'

type Props = {
	activeCategory: CategoryType
}

const MenuList = ({ activeCategory }: Props) => {
	const filtredProducts = products.filter((product) => product.category === activeCategory)
	return (
		<div className={s.wrapper}>
			{filtredProducts.map((product) => (
				<MenuListItem
					key={product.name}
					name={product.name}
					price={product.price}
					description={product.description}
					url={product.url}
				/>
			))}
		</div>
	)
}

export default MenuList

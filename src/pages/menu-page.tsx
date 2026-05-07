import { useParams } from 'react-router-dom'
import MenuList from '../components/menu-list/menu-list'
import type { CategoryType } from '../types/types'

const MenuPage = () => {
	const { category } = useParams()

	const safeCategory = (category as CategoryType) || 'pizza'
	const categoryTitle = safeCategory === 'pizza' ? 'Пицца'
		: safeCategory === 'burger' ? 'Бургеры'
			: safeCategory === 'snack' ? 'Закуски'
				: safeCategory === 'drink' ? 'Напитки'
					: safeCategory === 'coffee' ? 'Кофе'
						: ''

	return (
		<div>
			{categoryTitle && <h1 style={{ margin: '30px 0 20px' }}>{categoryTitle}</h1>}
			<MenuList activeCategory={safeCategory} />
		</div>
	)
}

export default MenuPage

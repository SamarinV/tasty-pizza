import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../button/button'
import s from './category-tabs.module.scss'

const categories = [
	{ name: 'Пиццы', value: 'pizza' },
	{ name: 'Бургеры', value: 'burger' },
	{ name: 'Закуски', value: 'snack' },
	{ name: 'Напитки', value: 'drink' },
	{ name: 'Кофе', value: 'coffee' },
]

const CategoryTabs = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const activeCategory = location.pathname.replace('/', '') || 'pizza'

	return (
		<div className={s.wrapper}>
			<div className={s.items}>
				{categories.map((cat) => (
					<Button
						key={cat.value}
						func={() => navigate(`/${cat.value}`)}
						type="secondary"
						active={activeCategory === cat.value}
					>
						{cat.name}
					</Button>
				))}
			</div>
		</div>
	)
}

export default CategoryTabs

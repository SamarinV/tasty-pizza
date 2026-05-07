import type { CategoryType } from '../../types/types'
import Button from '../button/button'
import s from './category-tabs.module.scss'

type Props = {
	activeCategory: CategoryType
	changeCategory: (category: CategoryType) => void
}

const CategoryTabs = ({ activeCategory, changeCategory }: Props) => {
	const openProfile = () => {
		console.log(activeCategory)
	}
	return (
		<div className={s.wrapper}>
			<div className={s.items}>
				<Button func={() => changeCategory('pizza')} type="secondary" active={activeCategory === 'pizza'}>
					Пиццы
				</Button>
				<Button func={() => changeCategory('burger')} type="secondary" active={activeCategory === 'burger'}>
					Бургеры
				</Button>
				<Button func={() => changeCategory('snack')} type="secondary" active={activeCategory === 'snack'}>
					<div>Закуски</div>
				</Button>
				<Button func={() => changeCategory('drink')} type="secondary" active={activeCategory === 'drink'}>
					Напитки
				</Button>
				<Button func={() => changeCategory('coffee')} type="secondary" active={activeCategory === 'coffee'}>
					Кофе
				</Button>
			</div>
			<Button func={openProfile} type="prime" isBasket={true} basketCount={2}>
				1300 ₽
			</Button>
		</div>
	)
}

export default CategoryTabs

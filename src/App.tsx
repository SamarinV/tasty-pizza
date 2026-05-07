import { useState } from 'react'
import s from './App.module.scss'
import CategoryTabs from './components/category-tabs/category-tabs'
import Header from './header/header'
import MenuList from './menu-list/menu-list'
import Promo from './promo/promo'
import type { CategoryType } from './types/types'

function App() {
	const [activeCategory, setActiveCategory] = useState<CategoryType>('pizza')
	const changeCategory = (category: CategoryType) => {
		setActiveCategory(category)
	}
	return (
		<div className={s.wrapper}>
			<div className={s.app}>
				<Header />
				<CategoryTabs changeCategory={changeCategory} activeCategory={activeCategory} />
				<Promo />
				<MenuList activeCategory={activeCategory} />
			</div>
		</div>
	)
}

export default App

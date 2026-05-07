import { Navigate, Route, Routes } from 'react-router-dom'
import s from './App.module.scss'
import CategoryTabs from './components/category-tabs/category-tabs'
import Header from './components/header/header'
import Promo from './components/promo/promo'
import MenuPage from './pages/menu-page'

function App() {
	return (
		<div className={s.wrapper}>
			<div className={s.app}>
				<Header />
				<CategoryTabs />
				<Promo />

				<Routes>
					<Route path="/" element={<Navigate to="/pizza" replace />} />

					<Route path="/:category" element={<MenuPage />} />
				</Routes>
			</div>
		</div>
	)
}

export default App

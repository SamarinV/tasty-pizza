import { useRef } from 'react'
import s from './promo.module.scss'

const promoItems = [
	{
		id: 1,
		title: 'Скидка 20% на всё меню',
		image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9',
	},
	{
		id: 2,
		title: '2 пиццы по цене 1',
		image: 'https://images.unsplash.com/photo-1548365328-8b849e4a8f3f',
	},
	{
		id: 3,
		title: 'Бесплатная доставка',
		image: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6',
	},
	{
		id: 4,
		title: 'Комбо меню от 299₽',
		image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
	},
	{
		id: 5,
		title: 'Кофе в подарок',
		image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
	},
	{
		id: 6,
		title: 'Бургер + картошка',
		image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
	},
	{
		id: 7,
		title: 'Наггетсы со скидкой',
		image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086',
	},
	{
		id: 8,
		title: 'Напиток за 1₽',
		image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97',
	},
]

const Promo = () => {
	const sliderRef = useRef<HTMLDivElement>(null)

	const scroll = (dir: 'left' | 'right') => {
		if (!sliderRef.current) return

		const width = 320

		sliderRef.current.scrollBy({
			left: dir === 'left' ? -width : width,
			behavior: 'smooth',
		})
	}

	return (
		<div className={s.wrapper}>
			<button className={s.arrowLeft} onClick={() => scroll('left')}>
				‹
			</button>

			<div className={s.slider} ref={sliderRef}>
				{promoItems.map((item) => (
					<div key={item.id} className={s.slide}>
						<img src={item.image} alt={item.title} />
						<div className={s.title}>{item.title}</div>
					</div>
				))}
			</div>

			<button className={s.arrowRight} onClick={() => scroll('right')}>
				›
			</button>
		</div>
	)
}

export default Promo

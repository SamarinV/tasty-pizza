import { useRef } from 'react'
import s from './promo.module.scss'
import { promoItems } from '../../data/promo'

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

import s from './button.module.scss'
import BasketIcon from '../../assets/basket.svg?react'

type Props = {
	func: () => void
	type: 'outline' | 'prime' | 'secondary'
	children: React.ReactNode
	rightContent?: React.ReactNode
	isBasket?: boolean
	basketCount?: number
	active?: boolean
}

const Button = ({ func, type, children, isBasket, basketCount, active }: Props) => {
	return (
		<button onClick={func} className={`${s.btn} ${s[`btn-${type}`]} ${active ? s.active : ''}`}>
			{children}
			{isBasket && (
				<div className={s.right}>
					{basketCount} <BasketIcon />
				</div>
			)}
		</button>
	)
}

export default Button

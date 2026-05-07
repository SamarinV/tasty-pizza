import Button from '../../components/button/button'
import s from './menu-list-item.module.scss'

type Props = {
	name: string
	price: number
	description: string
	url: string
}

const MenuListItem = ({ name, price, description, url }: Props) => {
	return (
		<div className={s.item}>
			<img className={s.image} src={url} alt={name} />
			<h3>{name}</h3>
			<p>{description}</p>
			<p>${price.toFixed(2)}</p>
			<Button func={() => alert('Добавлено в корзину')} type="prime" isBasket={true} basketCount={1}>
				Выбрать
			</Button>
		</div>
	)
}

export default MenuListItem

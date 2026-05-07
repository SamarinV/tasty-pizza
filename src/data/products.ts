export type Product = {
	name: string
	price: number
	description: string
	url: string
	category: 'pizza' | 'burger' | 'snack' | 'drink' | 'coffee'
}

export const products: Product[] = [
	// 🍕 PIZZA
	{
		name: 'Пепперони',
		price: 599,
		description: 'Острая пепперони, моцарелла и соус',
		url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
		category: 'pizza',
	},
	{
		name: 'Маргарита',
		price: 499,
		description: 'Томатный соус, моцарелла, базилик',
		url: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
		category: 'pizza',
	},
	{
		name: 'Четыре сыра',
		price: 649,
		description: 'Моцарелла, пармезан, дор блю, чеддер',
		url: 'https://images.unsplash.com/photo-1692737580558-b9dfdac5599c?q=80&w=915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'pizza',
	},
	{
		name: 'Гавайская',
		price: 579,
		description: 'Ветчина и ананас',
		url: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65',
		category: 'pizza',
	},
	{
		name: 'Мясная',
		price: 699,
		description: 'Колбаски, бекон, фарш',
		url: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9',
		category: 'pizza',
	},
	{
		name: 'Вегетарианская',
		price: 549,
		description: 'Овощи и сыр',
		url: 'https://images.unsplash.com/photo-1632641736062-29327b7182d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'pizza',
	},

	// 🍔 BURGERS
	{
		name: 'Чизбургер',
		price: 349,
		description: 'Говядина, сыр чеддер',
		url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
		category: 'burger',
	},
	{
		name: 'Биг бургер',
		price: 449,
		description: 'Двойная котлета и сыр',
		url: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
		category: 'burger',
	},
	{
		name: 'Чикен бургер',
		price: 329,
		description: 'Куриная котлета и соус',
		url: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086',
		category: 'burger',
	},
	{
		name: 'Бекон бургер',
		price: 459,
		description: 'Бекон, сыр, говядина',
		url: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b',
		category: 'burger',
	},
	{
		name: 'Дабл чиз',
		price: 499,
		description: 'Две котлеты и сыр',
		url: 'https://plus.unsplash.com/premium_photo-1695800954019-ccc9caa52bbe?q=80&w=1197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'burger',
	},
	{
		name: 'Острый бургер',
		price: 379,
		description: 'С соусом чили',
		url: 'https://images.unsplash.com/photo-1713636342682-fd6f2c7eb1cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'burger',
	},

	// 🍟 SNACKS
	{
		name: 'Картофель фри',
		price: 199,
		description: 'Хрустящий картофель',
		url: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877',
		category: 'snack',
	},
	{
		name: 'Наггетсы',
		price: 249,
		description: 'Куриные наггетсы',
		url: 'https://images.unsplash.com/photo-1619881590738-a111d176d906?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'snack',
	},
	{
		name: 'Крылышки',
		price: 299,
		description: 'Острые куриные крылья',
		url: 'https://images.unsplash.com/photo-1585703900468-13c7a978ad86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'snack',
	},
	{
		name: 'Луковые кольца',
		price: 179,
		description: 'Хрустящие кольца',
		url: 'https://images.unsplash.com/photo-1639024471283-03518883512d',
		category: 'snack',
	},
	{
		name: 'Сырные палочки',
		price: 229,
		description: 'Сыр в панировке',
		url: 'https://images.unsplash.com/photo-1734774924912-dcbb467f8599?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'snack',
	},

	// 🥤 DRINKS
	{
		name: 'Кола',
		price: 149,
		description: 'Газировка',
		url: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97',
		category: 'drink',
	},
	{
		name: 'Фанта',
		price: 149,
		description: 'Апельсиновый напиток',
		url: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'drink',
	},
	{
		name: 'Спрайт',
		price: 149,
		description: 'Лимон-лайм',
		url: 'https://images.unsplash.com/photo-1680404005217-a441afdefe83?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'drink',
	},
	{
		name: 'Сок',
		price: 129,
		description: 'Яблочный сок',
		url: 'https://images.unsplash.com/photo-1605199910378-edb0c0709ab4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'drink',
	},
	{
		name: 'Минералка',
		price: 99,
		description: 'Минеральная вода',
		url: 'https://images.unsplash.com/photo-1592243364766-eb1bd3a71709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWluZXJhbGUlMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D',
		category: 'drink',
	},
	{
		name: 'Энергетик',
		price: 179,
		description: 'Энергетический напиток',
		url: 'https://images.unsplash.com/photo-1560689189-65b6ed6228e7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'drink',
	},

	// ☕ COFFEE
	{
		name: 'Капучино',
		price: 249,
		description: 'Кофе с молочной пенкой',
		url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
		category: 'coffee',
	},
	{
		name: 'Латте',
		price: 269,
		description: 'Мягкий кофе с молоком',
		url: 'https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'coffee',
	},
	{
		name: 'Американо',
		price: 199,
		description: 'Чёрный кофе',
		url: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6',
		category: 'coffee',
	},
	{
		name: 'Эспрессо',
		price: 159,
		description: 'Крепкий кофе',
		url: 'https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'coffee',
	},
	{
		name: 'Мокко',
		price: 279,
		description: 'Кофе с шоколадом',
		url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
		category: 'coffee',
	},
	{
		name: 'Раф',
		price: 289,
		description: 'Сливочный кофе',
		url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
		category: 'coffee',
	},
]

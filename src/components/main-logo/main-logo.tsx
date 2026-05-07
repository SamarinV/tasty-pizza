import s from './main-logo.module.scss'

const MainLogo = () => {
	return (
		<div className={s.wrapper}>
			<img src="/src/assets/logo.png" alt="Tasty Pizza logo" />
			<div className={s.text}>
				<span className={s.title}>Tasty pizza</span>
				<p className={s.subtitle}>Вкуснее уже некуда</p>
			</div>
		</div>
	)
}

export default MainLogo

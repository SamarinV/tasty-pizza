import Button from '../components/button/button'
import MainLogo from '../components/main-logo/main-logo'
import Search from '../components/search/search'
import s from './header.module.scss'
import ProfileIcon from '../assets/profile.svg?react'

const Header = () => {
	const openProfile = () => {
		alert('Profile')
	}
	return (
		<header className={s.header}>
			<MainLogo />
			<Search />
			<Button func={openProfile} type="outline">
				<ProfileIcon />
				Profile
			</Button>
		</header>
	)
}

export default Header

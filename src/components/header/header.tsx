
import s from './header.module.scss'
import ProfileIcon from '../../assets/profile.svg?react'
import MainLogo from '../main-logo/main-logo'
import Search from '../search/search'
import Button from '../button/button'

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

import s from './search.module.scss'

const Search = () => {
	return <input type="text" placeholder="Поиск пиццы..." className={s.search} />
}
 
export default Search;
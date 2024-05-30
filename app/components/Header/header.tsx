import HeaderDownElement from '../HeaderDownElement/HeaderDownElement'
import HeaderUpElement from '../HeaderUpElement/HeaderUpElement'

export default function Header() {
	return (
		<header className='header'>
			<HeaderUpElement />
			<HeaderDownElement />
		</header>
	)
}

import Link from 'next/link'

export default function Header() {
	return (
		<header className='header'>
			<ul className='header__list'>
				<li className='header__item'>
					<div className='header__link-container'>
						<Link className='header__link' href='#'>
							Гарантия свежести
						</Link>
						<Link className='header__link' href='#'>
							Доставка и оплата
						</Link>
						<Link className='header__link' href='#'>
							Оптовые поставки
						</Link>
						<Link className='header__link' href='#'>
							Контакты
						</Link>
					</div>
				</li>
				<li className='header__item'>
					<div className='header__city-container'>
						<button className='header__location-button'></button>
						<p className='header__city-info'>г. Сыктывкар</p>
					</div>
				</li>
			</ul>
		</header>
	)
}

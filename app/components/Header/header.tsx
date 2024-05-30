import Image from 'next/image'
import Link from 'next/link'
import phoneImage from '../../../public/phone.svg'
import HeaderBasket from '../HeaderBasket/HeaderBasket'
import HeaderLocation from '../HeaderLocation/HeaderLocation'

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
				<li className='header__item header__item_gap_big'>
					<HeaderLocation />
					<div className='header__phone-container'>
						<Image
							src={phoneImage}
							alt='Иконка телефона'
							width={24}
							height={24}
						></Image>
						<p className='header__phone-number'>8-922-080-23-76</p>
					</div>
					<HeaderBasket />
				</li>
			</ul>
		</header>
	)
}

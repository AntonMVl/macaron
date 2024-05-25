import Image from 'next/image'
import Link from 'next/link'
import locationArrow from '../../../public/Vector.svg'
import basketImage from '../../../public/basket.svg'
import cityImage from '../../../public/city-icon.svg'
import phoneImage from '../../../public/phone.svg'

import BasketCounter from '../basketCounter/basketCounter'

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
					<div className='header__city-container'>
						<button className='header__location-button'>
							<Image
								src={cityImage}
								alt='Иконка геолокации'
								width={24}
								height={24}
							></Image>
						</button>
						<p className='header__city-info'>г. Сыктывкар</p>
						<button className='header__location-button'>
							<Image
								src={locationArrow}
								alt='Стрелка геолокации'
								width={8}
								height={11}
							></Image>
						</button>
					</div>
					<div className='header__phone-container'>
						<Image
							src={phoneImage}
							alt='Иконка телефона'
							width={24}
							height={24}
						></Image>
						<p className='header__phone-number'>8-922-080-23-76</p>
					</div>
					<div className='header__basket-container'>
						<button className='header__basket-button'>
							<Image
								src={basketImage}
								alt='Иконка корзины'
								width={24}
								height={24}
							></Image>
							<button className='header__basket-info'>
								{basketQuantity
									? `В корзине (${basketQuantity} товар)`
									: 'Корзина'}
							</button>
							{basketQuantity ? (
								<button className='header__basket-target'>
									{basketQuantity}
								</button>
							) : null}
						</button>
					</div>
				</li>
			</ul>
			<BasketCounter />
		</header>
	)
}

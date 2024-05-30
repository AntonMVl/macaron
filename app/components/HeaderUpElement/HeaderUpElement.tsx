import Image from 'next/image'
import Link from 'next/link'
import ok from '../../../public/ok.svg'
import phoneImage from '../../../public/phone.svg'
import telegram from '../../../public/tg.svg'
import vk from '../../../public/vk.svg'
import HeaderBasket from '../HeaderBasket/HeaderBasket'
import HeaderLocation from '../HeaderLocation/HeaderLocation'

export default function HeaderUpElement() {
	return (
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
			<li className='header__item header__item_gap_big'>
				<Link
					className='header__link'
					href='https://t.me/AMorohin'
					target='_blanck'
				>
					<Image
						src={telegram}
						alt='Иконка телеграм'
						width={24}
						height={24}
					></Image>
				</Link>
				<Link className='header__link' href='https://vk.com/' target='_blanck'>
					<Image src={vk} alt='Иконка вконтакте' width={24} height={24}></Image>
				</Link>
				<Link className='header__link' href='https://ok.ru/' target='_blanck'>
					<Image
						src={ok}
						alt='Иконка одноклассники'
						width={24}
						height={24}
					></Image>
				</Link>
			</li>
		</ul>
	)
}

import Image from 'next/image'
import Link from 'next/link'
import locationArrow from '../../../public/Vector.svg'

export default function HeaderDownElement() {
	return (
		<ul className='header__down-container'>
			<li>
				<Link href={'#'}>Сладкие дни</Link>
				<Image
					src={locationArrow}
					alt='Стрелка геолокации'
					width={8}
					height={11}
				></Image>
			</li>
		</ul>
	)
}

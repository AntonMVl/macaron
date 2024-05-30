'use client'

import Image from 'next/image'
import { useState } from 'react'
import basketImage from '../../../public/basket.svg'

export default function HeaderBasket() {
	const [basketQuantity, setBasketQuantity] = useState(2)

	const formatBasketText = (quantity: number): string => {
		if (quantity === 1) {
			return `В корзине (${quantity} товар)`
		} else if (quantity >= 2 && quantity <= 4) {
			return `В корзине (${quantity} товара)`
		} else {
			return `В корзине (${quantity} товаров)`
		}
	}

	return (
		<div className='header__basket-container'>
			<button className='header__basket-button'>
				<Image
					src={basketImage}
					alt='Иконка корзины'
					width={24}
					height={24}
				></Image>
			</button>
			<button className='header__basket-info'>
				{basketQuantity ? formatBasketText(basketQuantity) : 'Корзина'}
			</button>
			{basketQuantity ? (
				<button className='header__basket-target'>{basketQuantity}</button>
			) : null}
		</div>
	)
}

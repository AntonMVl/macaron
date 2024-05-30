'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import locationArrow from '../../../public/Vector.svg'
import cityImage from '../../../public/city-icon.svg'

export default function HeaderLocation() {
	const [city, setCity] = useState('')
	const [loading, setLoading] = useState(false)

	const fetchCity = async (position: GeolocationPosition) => {
		setLoading(true)
		const { latitude, longitude } = position.coords

		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
			)
			const data = await response.json()

			if (data && data.address && data.address.city) {
				setCity(data.address.city)
			} else {
				setCity('Город не найден')
			}
			setLoading(false)
		} catch (error) {
			console.error('Ошибка при определении города:', error)
			setCity('Ошибка при определении города')
		}
	}

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(fetchCity)
	}, [])

	return (
		<div className='header__city-container'>
			<button
				className='header__location-button'
				onClick={() => navigator.geolocation.getCurrentPosition(fetchCity)}
			>
				<Image
					src={cityImage}
					alt='Иконка геолокации'
					width={24}
					height={24}
				></Image>
			</button>
			{loading ? (
				<p>Загрузка...</p>
			) : (
				<p className='header__city-info'>{city}</p>
			)}
			<button
				className='header__location-button'
				onClick={() => navigator.geolocation.getCurrentPosition(fetchCity)}
			>
				<Image
					src={locationArrow}
					alt='Стрелка геолокации'
					width={8}
					height={11}
				></Image>
			</button>
		</div>
	)
}

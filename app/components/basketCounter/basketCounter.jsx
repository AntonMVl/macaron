import { useDispatch, useSelector } from 'react-redux'
import { addProductToBasket } from '../../store/basketSlice'

function BasketCounter() {
	const basketQuantity = useSelector(state => state.basket.basketCounter)
	const dispatch = useDispatch()

	const clickBasketCounter = () => {
		dispatch(addProductToBasket())
	}

	return (
		<button onClick={clickBasketCounter} className='header__basket-target'>
			{basketQuantity}
		</button>
	)
}

export default BasketCounter

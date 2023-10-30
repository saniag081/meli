import './CardProduct.scss';
import { Link } from "react-router-dom";

function CardProduct({ product }) {
  const formatCurrency = (value, currencyType) => {
    if (typeof value !== 'number') return 'Valor no válido';

    return value.toLocaleString(undefined, {
      style: 'currency',
      currency: currencyType,
      minimumFractionDigits: 2,
    });
  }

	return (
		<li>
			<Link
				to={`/items/${product.id}`}
				className='card'
			>
				<figure className='card__image'>
					<img
						src={product.picture}
						alt={product.title}
						width={200}
						height={100}
					/>
				</figure>
				<div className='card__content'>
					<div>
						<p className='card__content-price'>
							${ formatCurrency(product.price.amount, product.price.currency) }
						</p>
						<h4 className='card__content-title'>
							{ product.title }
						</h4>
					</div>
					<p>{ product.condition }</p>
				</div>
			</Link>
		</li>
	)
}

export default CardProduct;

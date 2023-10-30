const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const amount = req.query.max ?? 10;
		const request = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
		const getDataItemFormat = request.data.results.map((item) => ({
			id: item.id,
			title: item.title,
			price: {
				currency: item.currency_id,
				amount: item.price,
				decimals: item.price,
			},
			picture: item.thumbnail,
			condition: item.condition,
			free_shipping: item.shipping.free_shipping,
		})).slice(0, amount)
		const structure = {
			author: {
				nombre: '',
				lasname: '',
			},
			categories: [req.query.q],
			items: getDataItemFormat,
		}
		res.json(structure)
	} catch (error) {
		res.status(500);
	}
})

router.get('/:id', async (req, res) => {
	try {
		const [detail, description] = await Promise.all([
			axios.get(`https://api.mercadolibre.com/items/${req.params.id}`),
			axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`)
		])
		const data = {
			author: {
				name: '',
				lasname: '',
			},
			item: {
				id: detail.data.id,
				title: detail.data.title,
				price: {
					currency: detail.data.currency_id,
					amount: detail.data.price,
					decimals: detail.data.price,
				},
				picture: detail.data.pictures[0].secure_url,
				condition: detail.data.condition,
				free_shipping: detail.data.shipping.free_shipping,
				sold_quantity: detail.data.sold_quantity,
				description: description.data.text,
			}
		}
		res.json(data)
	} catch (error) {
		res.status(500);
	}
})

module.exports = router;

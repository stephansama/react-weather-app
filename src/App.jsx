import { Container } from 'react-bootstrap'
import { useEffect } from 'react'
import env from 'react-dotenv'

import Navbar from './components/Navbar'
import Input from './components/Input'

const { API } = env
const API_TEMPLATE =
	'https://api.openweathermap.org/data/2.5/weather?q=[local]&appid=[API]'

const App = () => {
	const loadWeather = async (location) => {
		const response = await fetch(
			API_TEMPLATE.replace('[local]', location).replace('[API]', API)
		)
		return await response.json()
	}

	useEffect(async () => {
		const res = await loadWeather('St. Louis')
		console.log(res)
	}, [])

	return (
		<Container>
			<Navbar />
			<Input />
		</Container>
	)
}

export default App

import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import env from 'react-dotenv'

// Custom Components
import Navbar from './components/Navbar'
import Input from './components/Input'
import Footer from './components/Footer'
import WeatherCard from './components/WeatherCard'
import WeatherSelected from './components/WeatherSelected'

// Global Variables
const { WEATHER_API, BING_API, BING_HOST, BING_PATH } = env
const BING_API_TEMPLATE = `https://${BING_HOST}${BING_PATH}?q=[term]`
const WEATHER_API_TEMPLATE =
	'https://api.openweathermap.org/data/2.5/weather?q=[local]&appid=[API]'

console.log(BING_API)

// Main App Component
const App = () => {
	const [locations, setLocations] = useState([])
	const [selected, setSelected] = useState(null)

	// load Weather information from OpenWeatherAPI
	// set selected location to the searched for element
	const loadWeatherData = async (location) => {
		const response = await fetch(
			WEATHER_API_TEMPLATE.replace('[local]', location).replace(
				'[API]',
				WEATHER_API
			)
		)
		const data = await response.json()
		const currentIndex = locations.length
		setLocations((oldLocations) => [...oldLocations, data])
		setSelected(currentIndex)
	}

	// load Bing image based on search term
	const loadBingImage = async (term) => {
		const response = await fetch(BING_API_TEMPLATE.replace('[term]', term))
		const data = await response.json()

		console.log(data)
	}

	const selectCard = (index) => {
		setSelected(index)
	}

	useEffect(async () => {
		if (locations.length === 0) await loadWeatherData('St. Louis')
		// await loadBingImage('St. Louis')
	}, [])

	return (
		<Container className='d-flex flex-column h-100'>
			<Navbar />
			<Input load={loadWeatherData} />
			<Container className='d-flex justify-content-center flex-wrap'>
				{locations.map((elem, i) => (
					<WeatherCard key={i} data={{ ...elem, idd: i }} select={selectCard} />
				))}
			</Container>
			<WeatherSelected selected={locations[selected]} />
			<Footer />
		</Container>
	)
}

export default App

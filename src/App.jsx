import { Container, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'

// Custom Components
import Navbar from './components/Navbar'
import Input from './components/Input'
import Footer from './components/Footer'
import WeatherCard from './components/WeatherCard'
import WeatherSelected from './components/WeatherSelected'

// Global Variables
const {
	REACT_APP_WEATHER_API,
	REACT_APP_BING_API,
	REACT_APP_BING_HOST,
	REACT_APP_BING_PATH,
} = process.env
const BING_API_TEMPLATE = `https://${REACT_APP_BING_HOST}${REACT_APP_BING_PATH}?count=5&q=[term]`
const WEATHER_API_TEMPLATE =
	'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=[local]&appid=[API]'

// Main App Component
const App = () => {
	// state variables
	const [locations, setLocations] = useState([])
	const [selected, setSelected] = useState(null)
	const maximumElements = 3

	// load Weather information from OpenWeatherAPI
	// set selected location to the searched for element
	const loadWeatherData = async (weatherLocation) => {
		const response = await fetch(
			WEATHER_API_TEMPLATE.replace('[local]', weatherLocation).replace(
				'[API]',
				REACT_APP_WEATHER_API
			)
		)

		const data = await response.json()

		if (data.cod === '404') return false

		const thumbnail = await loadBingImage(data.name)
		const currentIndex = locations.length
		// update state variables
		setSelected(
			currentIndex === maximumElements ? maximumElements - 1 : currentIndex
		)
		setLocations((oldLocations) => {
			if (oldLocations.length === maximumElements) oldLocations.shift()
			return [...oldLocations, { thumbnail, ...data }]
		})
		return true
	}

	// load Bing image based on search term
	const loadBingImage = async (term) => {
		const response = await fetch(BING_API_TEMPLATE.replace('[term]', term), {
			method: 'GET',
			headers: { 'Ocp-Apim-Subscription-Key': REACT_APP_BING_API },
		})
		const data = await response.json()

		return data.value.map((elem) => elem.thumbnailUrl)
	}

	// check to see if the requested search term has already been searched
	const checkLocationList = (term) => {
		return locations.some(
			(elem) => elem.name.toLowerCase() === term.replace('.', '').toLowerCase()
		)
	}

	const selectCard = (index) => {
		setSelected(index)
	}

	// load St. Louis by default
	useEffect(() => {
		if (locations.length === 0) loadWeatherData('St. Louis')
	}, [])

	return (
		<div className='d-flex flex-column h-100 w-100'>
			<Navbar />
			<Container className='d-flex flex-grow-1 flex-column'>
				<Input isInList={checkLocationList} load={loadWeatherData} />
				<Container className='d-grid'>
					<Row className='d-flex justify-content-center'>
						{locations.map((elem, i) => (
							<WeatherCard
								key={i}
								data={{ ...elem, idd: i }}
								select={selectCard}
								selected={locations[selected]}
							/>
						))}
					</Row>
				</Container>
				<WeatherSelected selected={locations[selected]} />
			</Container>
			<Footer />
		</div>
	)
}

export default App

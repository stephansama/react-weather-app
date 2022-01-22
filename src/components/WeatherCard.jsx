import { Card, Tooltip, OverlayTrigger } from 'react-bootstrap'

import './WeatherCard.css'

const WeatherCard = ({ data, select }) => {
	const handleSelect = (e) => {
		e.preventDefault()
		select(data.idd)
	}
	return (
		<Card onClick={handleSelect} className='p-3 m-2 weatherCard'>
			{/* <OverlayTrigger
				placement='top'
				overlay={<Tooltip>{data.weather[0].description}</Tooltip>}
			> */}
			{data && <Card.Title className='pt-2'>{data.name}</Card.Title>}
			{/* </OverlayTrigger> */}
		</Card>
	)
}

export default WeatherCard

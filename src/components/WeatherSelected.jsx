import { Container } from 'react-bootstrap'

const WeatherSelected = ({ selected }) => {
	return (
		<Container className='d-flex flex-grow-1'>
			{selected ? selected.name : 'Not selected'}
		</Container>
	)
}

export default WeatherSelected

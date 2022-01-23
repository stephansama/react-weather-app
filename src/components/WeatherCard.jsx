import { Card } from 'react-bootstrap'

const WeatherCard = ({ data, select }) => {
	const imageHeight = (number) => `${number}rem`

	const handleSelect = (e) => {
		e.preventDefault()
		select(data.idd)
	}

	return (
		<Card
			onClick={handleSelect}
			className='col p-0 mx-1'
			style={{
				color: 'white',
				cursor: 'pointer',
				maxWidth: imageHeight(10),
				maxHeight: imageHeight(4),
				fontWeight: 'bold',
			}}
		>
			<Card.Img
				src={data.thumbnail}
				style={{ objectFit: 'cover' }}
				className='h-100 w-100'
			/>
			<Card.ImgOverlay
				className='d-flex justify-content-center align-items-center'
				style={{
					color: 'white',
					backgroundColor: 'rgba(0,0,0,0.5)',
				}}
			>
				{data.name}
			</Card.ImgOverlay>
		</Card>
	)
}

export default WeatherCard

import { Accordion, Card, Carousel, Col, Container, Row } from 'react-bootstrap'

const carouselHeight = '300px'

const WeatherSelected = ({ selected }) => {
	const loaded = () => {
		return (
			<>
				<Row className='d-flex h-100 justify-content-center align-items-center'>
					<Container className='col-md-6 py-2 d-flex flex-column'>
						<Accordion defaultActiveKey='0'>
							<Accordion.Item eventKey='0'>
								<Accordion.Header>Temperature</Accordion.Header>
								<Accordion.Body>
									<Row>
										<Col className='text-end'>Exact Temperature:</Col>
										<Col>{selected.main.temp}&deg; F</Col>
									</Row>
									<Row>
										<Col className='text-end'>Feels Like:</Col>
										<Col>{selected.main.feels_like}&deg; F</Col>
									</Row>
									<Row>
										<Col className='text-end'>Minimum Temperature:</Col>
										<Col>{selected.main.temp_min}&deg; F</Col>
									</Row>
									<Row>
										<Col className='text-end'>Maximum Temperature:</Col>
										<Col>{selected.main.temp_max}&deg; F</Col>
									</Row>
									<Row>
										<Col className='text-end'>Pressure:</Col>
										<Col>{selected.main.pressure}hPa</Col>
									</Row>
									<Row>
										<Col className='text-end'>Humidity:</Col>
										<Col>{selected.main.humidity}%</Col>
									</Row>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey='1'>
								<Accordion.Header>Wind</Accordion.Header>
								<Accordion.Body>
									<Row>
										<Col className='text-end'>Speed:</Col>
										<Col>{selected.wind.speed}mph</Col>
									</Row>
									<Row>
										<Col className='text-end'>Degree:</Col>
										<Col>{selected.wind.deg}&deg;</Col>
									</Row>
									<Row>
										<Col className='text-end'>Gust:</Col>
										<Col>{selected.wind.gust}</Col>
									</Row>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Container>
					<Container className='col-md-6 my-1'>
						<Carousel fade style={{ height: carouselHeight }}>
							{selected.thumbnail.map((elem, i) => (
								<Carousel.Item key={i}>
									<img
										style={{
											height: carouselHeight,
											objectFit: 'cover',
											borderRadius: '8px',
										}}
										className='d-block w-100'
										src={elem}
									/>
								</Carousel.Item>
							))}
						</Carousel>
					</Container>
				</Row>
			</>
		)
	}

	const loading = () => {
		return (
			<Container className='d-flex h-100 align-items-center justify-content-center w-100'>
				Loading...
			</Container>
		)
	}

	return (
		<Container className='d-grid w-100 h-100 align-items-center p-3'>
			{selected ? loaded() : loading()}
		</Container>
	)
}

export default WeatherSelected

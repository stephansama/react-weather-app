import { Accordion, Carousel, Col, Container, Row } from 'react-bootstrap'

const carouselHeight = '500px'

const tableStyle = { width: '50%', textAlign: 'end' }

const WeatherSelected = ({ selected }) => {
	const loaded = () => {
		return (
			<>
				<Row className='d-flex h-100 justify-content-center align-items-center'>
					{/* IMAGES */}
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
					{/* INFORMATION SECTION */}
					<Container className='col-md-6 py-2 d-flex flex-column'>
						<h1 className='fs-4'>{selected.name}</h1>
						<table class='table'>
							<thead>
								<tr>
									<th>Temperature</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td style={tableStyle} scope='row'>
										Exact Temperature:
									</td>
									<td>{selected.main.temp}&deg; F</td>
								</tr>
								<tr>
									<td style={tableStyle} scope='row'>
										Feels Like:
									</td>
									<td>{selected.main.feels_like}&deg; F</td>
								</tr>
								<tr>
									<td style={tableStyle} scope='row'>
										Minimum Temperature:
									</td>
									<td>{selected.main.temp_min}&deg; F</td>
								</tr>
								<tr>
									<td style={tableStyle} scope='row'>
										Maximum Temperature:
									</td>
									<td>{selected.main.temp_max}&deg; F</td>
								</tr>
								<tr>
									<td style={tableStyle} scope='row'>
										Pressure:
									</td>
									<td>{selected.main.pressure}hPa</td>
								</tr>
								<tr>
									<td style={tableStyle} scope='row'>
										Humidity:
									</td>
									<td>{selected.main.humidity}%</td>
								</tr>
							</tbody>
						</table>
						<table className='table'>
							<thead>
								<tr>
									<th>Wind</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td style={tableStyle} scope='row'>
										Speed:
									</td>
									<td>{selected.wind.speed}mph</td>
								</tr>
								<tr>
									<td style={tableStyle} scope='row'>
										Degree:
									</td>
									<td>{selected.wind.deg}&deg;</td>
								</tr>
								<tr>
									<td style={tableStyle} scope='row'>
										Gust:
									</td>
									<td>{selected.wind.gust}</td>
								</tr>
							</tbody>
						</table>
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

import { Nav } from 'react-bootstrap'

const Footer = () => {
	return (
		<Nav className='d-flex justify-content-center'>
			<Nav.Item>
				<Nav.Link target='_blank' href='https://www.google.com'>
					E-Mail
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link target='_blank' href='https://www.google.com'>
					GitHub
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link target='_blank' href='https://www.google.com'>
					LinkedIn
				</Nav.Link>
			</Nav.Item>
		</Nav>
	)
}

export default Footer

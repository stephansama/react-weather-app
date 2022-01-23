import { Nav } from 'react-bootstrap'

const Footer = () => {
	return (
		<Nav className='d-flex justify-content-center'>
			<Nav.Item>
				<Nav.Link
					tabIndex='-1'
					target='_blank'
					href='mailto:stephanrandle.dev@gmail.com?subject=Programming Inquiry'
				>
					E-Mail
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link
					tabIndex='-1'
					target='_blank'
					href='https://github.com/stephansama'
				>
					GitHub
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link
					tabIndex='-1'
					target='_blank'
					href='https://www.linkedin.com/in/stephan-randle-38a30319a/'
				>
					LinkedIn
				</Nav.Link>
			</Nav.Item>
		</Nav>
	)
}

export default Footer

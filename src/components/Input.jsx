import {
	Button,
	FloatingLabel,
	Form,
	OverlayTrigger,
	Tooltip,
} from 'react-bootstrap'

const Input = () => {
	return (
		<Form className='d-flex m-3'>
			<Form.Group>
				<OverlayTrigger
					placement='top'
					overlay={<Tooltip>Insert name of city</Tooltip>}
				>
					<FloatingLabel controlId='city' label='City'>
						<Form.Control type='text' placeholder='city' />
					</FloatingLabel>
				</OverlayTrigger>
			</Form.Group>
			<Button>Search</Button>
		</Form>
	)
}

export default Input

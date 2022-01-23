import { useState } from 'react'
import {
	Button,
	FloatingLabel,
	Form,
	Row,
	OverlayTrigger,
	Tooltip,
} from 'react-bootstrap'

const Input = ({ load, isInList }) => {
	const [inText, setInText] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (inText === '' || !inText) return false
		if (!isInList(inText)) await load(inText)
		setInText('')
		return true
	}

	const handleChange = (e) => {
		setInText(e.target.value)
	}

	return (
		<Form className='d-grid m-3' onSubmit={handleSubmit}>
			{/* Input Form */}
			<Row className='d-flex justify-content-center'>
				<Form.Group className='px-2 col-9 col-md-5'>
					<OverlayTrigger
						placement='top'
						overlay={<Tooltip>Insert a location</Tooltip>}
					>
						<FloatingLabel controlId='city' label='Location'>
							<Form.Control
								value={inText}
								onChange={handleChange}
								type='text'
								placeholder='city'
							/>
						</FloatingLabel>
					</OverlayTrigger>
				</Form.Group>
				{/* Submit Button */}
				<Button type='submit' className='px-2 col-3 col-md-1'>
					Search
				</Button>
			</Row>
		</Form>
	)
}

export default Input

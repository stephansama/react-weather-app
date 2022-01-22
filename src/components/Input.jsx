import { useState } from 'react'
import {
	Button,
	FloatingLabel,
	Form,
	OverlayTrigger,
	Tooltip,
} from 'react-bootstrap'

const Input = ({ load }) => {
	const [inText, setInText] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(await load(inText))
	}

	const handleChange = (e) => {
		setInText(e.target.value)
	}

	return (
		<Form className='d-flex m-3 justify-content-center' onSubmit={handleSubmit}>
			{/* Input Form */}
			<Form.Group className='px-2'>
				<OverlayTrigger
					placement='top'
					overlay={<Tooltip>Insert name of city</Tooltip>}
				>
					<FloatingLabel controlId='city' label='City'>
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
			<Button type='submit' className='px-2'>
				Search
			</Button>
		</Form>
	)
}

export default Input

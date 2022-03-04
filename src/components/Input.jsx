import { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'

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
					<Form.Control
						value={inText}
						onChange={handleChange}
						type='text'
						placeholder='Input city name'
					/>
				</Form.Group>
				{/* Submit Button */}
				<Button type='submit' variant='info' className='col-3 col-md-1'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						className='bi bi-search'
						viewBox='0 0 16 16'
					>
						<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
					</svg>
				</Button>
			</Row>
		</Form>
	)
}

export default Input

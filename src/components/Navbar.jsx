import { Nav } from 'react-bootstrap'

const Navbar = () => {
	return (
		<Nav className='nav navbar-dark d-flex p-2 align-content-center justify-content-center bg-dark text-white'>
			<img
				width='25px'
				src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
			/>
			<span className='fs-5 ps-1'>Reactive Weather Application</span>
		</Nav>
	)
}

export default Navbar

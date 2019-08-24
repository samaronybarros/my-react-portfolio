import React, { Component } from 'react'
import Navbar from '../../../components/NavBar'
import Footer from '../../../components/Footer'
import Curriculum from '../../../components/Curriculum'

class CurriculumView extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Curriculum />
				<Footer />
			</React.Fragment>
		)
	}
}

export default CurriculumView

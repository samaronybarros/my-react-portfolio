import React, { Component } from 'react'
import Navbar from '../../../components/NavBar'
import Curriculum from '../../../components/Curriculum'

class CurriculumView extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Curriculum />
			</React.Fragment>
		)
	}
}

export default CurriculumView

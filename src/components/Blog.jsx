import React, { Component } from 'react'
import {
	MainDiv,
	MainH1,
	Miniature,
	MiniatureLink,
	BlackBox,
	BlackBoxText,
	BlackBoxTextH1,
	BlackBoxTextH2,
} from '../styles/Main'

import { sam, mern, deploy, git, http, jwt } from '../img/blog'
import Breadcrumbs from './Breadcrumbs'

class Curriculum extends Component {
	state = {
		showCompanies: false,
	}

	handleShowCompanies = () => this.setState({ showCompanies: !this.state.showCompanies })

	render() {
		return (
			<MainDiv>
				<Breadcrumbs name={'Blog'} />
				<MainH1>Blog</MainH1>

				<Miniature img={sam}>
					<MiniatureLink href="/">
						<BlackBox>
							<BlackBoxText>
								<BlackBoxTextH1>First of many</BlackBoxTextH1>
								<BlackBoxTextH2>26.05.19 - 2 min read</BlackBoxTextH2>
							</BlackBoxText>
						</BlackBox>
					</MiniatureLink>
				</Miniature>

				<Miniature img={mern}>
					<MiniatureLink href="/">
						<BlackBox>
							<BlackBoxText>
								<BlackBoxTextH1>
									How to create your first MERN (MongoDB, Express JS, React JS and Node JS) Stack
								</BlackBoxTextH1>
								<BlackBoxTextH2>02.06.19 - 11 min read</BlackBoxTextH2>
							</BlackBoxText>
						</BlackBox>
					</MiniatureLink>
				</Miniature>

				<Miniature img={git}>
					<MiniatureLink href="/">
						<BlackBox>
							<BlackBoxText>
								<BlackBoxTextH1>What do I need to know about Git?</BlackBoxTextH1>
								<BlackBoxTextH2>09.06.19 - 10 min read</BlackBoxTextH2>
							</BlackBoxText>
						</BlackBox>
					</MiniatureLink>
				</Miniature>

				<Miniature img={jwt}>
					<MiniatureLink href="/">
						<BlackBox>
							<BlackBoxText>
								<BlackBoxTextH1>
									Authentication: how to create a NodeJS application using JWT
								</BlackBoxTextH1>
								<BlackBoxTextH2>21.06.19 - 8 min read</BlackBoxTextH2>
							</BlackBoxText>
						</BlackBox>
					</MiniatureLink>
				</Miniature>

				<Miniature img={http}>
					<MiniatureLink href="/">
						<BlackBox>
							<BlackBoxText>
								<BlackBoxTextH1>HTTP: An overview of web development</BlackBoxTextH1>
								<BlackBoxTextH2>01.08.19 - 8 min read</BlackBoxTextH2>
							</BlackBoxText>
						</BlackBox>
					</MiniatureLink>
				</Miniature>

				<Miniature img={deploy}>
					<MiniatureLink href="/">
						<BlackBox>
							<BlackBoxText>
								<BlackBoxTextH1>How do I deploy my code to Heroku using GitLab CI/CD?</BlackBoxTextH1>
								<BlackBoxTextH2>18.08.19 - 8 min read</BlackBoxTextH2>
							</BlackBoxText>
						</BlackBox>
					</MiniatureLink>
				</Miniature>
			</MainDiv>
		)
	}
}

export default Curriculum

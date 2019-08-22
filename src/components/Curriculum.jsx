import React, { Component } from 'react'
import { MainDiv, MainH1, MainH2, MainH3, MainParagraph, CVPicture, MainLine } from '../styles/Main'
import picture from '../img/sam-picture.jpg'
import Breadcrumbs from './Breadcrumbs'

class Curriculum extends Component {
	render() {
		return (
			<MainDiv>
				<Breadcrumbs name={'Currículo'} />

				<MainH1>Currículo</MainH1>

				<MainH2>Dados Pessoais</MainH2>
				<MainLine />
				<CVPicture src={picture} alt="Foto de Sam Barros" />

				<MainH3>Nome:</MainH3>

				<MainParagraph>Seu Nome</MainParagraph>

				<MainH3>Data de Nascimento:</MainH3>

				<MainParagraph>Sua data de nascimento</MainParagraph>

				<MainH3>Residência:</MainH3>

				<MainParagraph>Sua cidade, país</MainParagraph>

				<MainH3>Idiomas:</MainH3>

				<MainParagraph>Português (Nativo)</MainParagraph>
				<MainParagraph>Idioma 2</MainParagraph>
				<MainParagraph>Idioma 3</MainParagraph>

				<MainH2>Sobre Mim</MainH2>
				<MainLine />

				<MainParagraph>
					Neste espaço escreva uma história sobre sua carreira. Fale sobre sua trajetória, suas conquistas e
					sobre o que você gosta de fazer. Pode incluir algo breve sobre o que você faz em seu tempo livre.
					Veja o exemplo do meu currículo em
				</MainParagraph>

				<MainParagraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ipsum vitae malesuada
					ultrices. Proin suscipit nulla odio, sit amet cursus ipsum fringilla ac. Morbi et turpis odio.
					Praesent diam ex, malesuada ornare neque et, placerat tincidunt nunc. Ut sit amet ex tincidunt,
					viverra nisl vitae, aliquam purus. Nam purus dolor, maximus in quam sed, aliquam congue ipsum.
					Integer eleifend id ante sed porta.
				</MainParagraph>

				<MainParagraph>
					Sed posuere sit amet mi ac rhoncus. Donec ac pretium nibh. Curabitur id nisi et lorem efficitur
					molestie. Quisque diam nulla, pulvinar sit amet porttitor id, mollis viverra leo. Fusce in tellus
					porttitor, suscipit turpis et, faucibus dui. Donec sit amet magna id nunc bibendum fermentum.
					Praesent quam odio, venenatis non tellus eu, molestie luctus erat. Mauris eu ultricies metus.
				</MainParagraph>

				<MainH2>Educação</MainH2>
				<MainLine />

				<MainH3>data-Em andamento</MainH3>

				<MainParagraph>Curso/Mestrado/Universidade</MainParagraph>

				<MainH3>data-data</MainH3>

				<MainParagraph>Curso/Mestrado/Universidade</MainParagraph>

				<MainH3>data-data</MainH3>

				<MainParagraph>Curso/Mestrado/Universidade</MainParagraph>

				<MainH2>Habilidades</MainH2>
				<MainLine />

				<MainH3>Tema 1</MainH3>

				<MainParagraph>Habilidade 1 / Habilidade 2...</MainParagraph>

				<MainH3>Tema 1</MainH3>

				<MainParagraph>Habilidade 1 / Habilidade 2...</MainParagraph>

				<MainH3>Tema 1</MainH3>

				<MainParagraph>Habilidade 1 / Habilidade 2...</MainParagraph>

				<MainH3>Tema 1</MainH3>

				<MainParagraph>Habilidade 1 / Habilidade 2...</MainParagraph>

				<MainH2>Experiência de Trabalho</MainH2>
				<MainLine />

				<MainH3>data-data</MainH3>

				<MainParagraph>Função - empresa - local</MainParagraph>

				<MainH3>data-data</MainH3>

				<MainParagraph>Função - empresa - local</MainParagraph>

				<MainH3>data-data</MainH3>

				<MainParagraph>Função - empresa - local</MainParagraph>

				<MainH2>Contato</MainH2>
				<MainLine />

				<MainParagraph>seu e-mail aqui</MainParagraph>
				<MainParagraph>seu telefone aqui</MainParagraph>
			</MainDiv>
		)
	}
}

export default Curriculum

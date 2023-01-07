import React, { Component } from 'react'
import curriculo from '../images/curriculo.pdf'
import '../style/About.css';
import imgABout from '../images/imgAbout.png'
import Header from './Header'

class About extends Component {
  render() {
    return (
      <section className='page-about'>
        <Header />
        <div className='about-profile'>
          <div className='image'>
            <img src={imgABout} alt="img-profile" className='img-profile'/>
          </div>
        <div className='text' id='right-text'>
          <h3 className='title'>SOBRE MIM.</h3>
          <p>
          Me chamo Caroline Nunes, tenho 24 anos e moro em Tubarão-SC.
          Formada em Administração e atualmente em transição de carreira para área de Desenvolvimento Web Full Stack.
          Acredito que somos protagonista do nosso futuro, e que podemos realizar grandes sonhos com força de vontade, conhecimento e espirito empreendedor.
          </p>
          <p>
          A área de tecnologia pra mim representa foco, disciplina e paixão por cada detalhe.
          Meu primeiro contato com desenvolvimento web foi na Trybe, onde eu desenvolvi algumas habilidades de Soft Skills e Hard Skills.
          Agora, sigo em constante evolução. Sempre aprimorando meus conhecimentos técnicos para impactar mais vidas utilizando a programação!
          </p>
          <a href={curriculo} target="_blank" rel="noopener noreferrer" className='link'>Currículo</a>
        </div>
      </div>
     </section>
    )
  }
}
export default About
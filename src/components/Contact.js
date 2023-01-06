import React, { Component } from 'react'
import '../style/Contact.css'
import email from '../images/email.png'
import imgConcat from '../images/concat.png'
import Header from './Header'

class Contact extends Component {
  render() {
    return (
      <main>
        <Header />
          <div className='background'>
            <img className='concatImg' src={imgConcat} alt="img"></img>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
          
          <main className='title-container'>
            <h1 className='title-concat'>CONTATO.</h1>
            <h3 className='concat1-title'>Gostou do meu Trabalho?</h3>
            <h4 className='concat2-title'>Me envie uma mensagem!</h4>
          </main>

          <section className='icons'>
          <div className='tag1'>
            <a href='https://github.com/carolhn' target="_blank" rel="noreferrer">
            <i className="devIcon devicon-github-original"></i>
            <h4 class="text-concat">Github</h4>
            </a>
          </div>

          <div className='tag1'>
            <a href='https://www.linkedin.com/in/caroline-nunes-devfullstack/' target="_blank" rel="noreferrer">
            <i className="devIcon devicon-linkedin-plain"></i>
            <h4 class="text-concat">Linkedin</h4>
            </a>
          </div>

          <div className='tag1'>
            <a href="mailto:nunescaroline905@gmail.com" target="_blank" rel="noreferrer">
            <img className='devIcon' src={email} alt='email' />
          <h4 class="text-concat">E-mail</h4>
        </a>
        </div>
        </section>
      </div>
    </main>
    )
  }
}

export default Contact

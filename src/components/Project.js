import React, { Component } from 'react'
import '../style/Project.css'
import Header from './Header'

import project1 from '../images/projeto1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import project4 from '../images/project4.png'
import project5 from '../images/project5.png'

export default class Project extends Component {
  render() {
    return (
      <div>
        <Header />
          <ul className='allProject'>
            <li>
              <img className='imgProject' src={project1} alt="project1" />
              <div className="textProject">
                <h1>Timer</h1>
                <p>Temporizdador desenvolvido utilizando HTML, CSS, JavaScript.</p>
              </div>
              <div className="btnProject">
                <a href="https://github.com/carolhn" target="blank_">
                  <button className='btnOne'>Repositorio</button>
                </a>
              </div>
            </li>

            <li>
              <img className='imgProject' src={project2} alt="project2" />
              <div className="textProject">
                <h1>Carteira Digital</h1>
                <p>Esse projeto tem o objetivo de gerenciar uma carteira de controle de gastos com conversor de moedas, utilizando Redux e React.
                    Foi consumido a API do awesomeapi API de Cotações para realizar a busca de câmbio de moedas, foi desenvolvido utilizando
                    HTML, CSS, Javascript, React e Redux.</p>
              </div>
              <div className="btnProject">
                <a href="https://github.com/carolhn/Projeto-Digital-Wallet" target="blank_">
                  <button className='btnOne'>Repositorio</button>
                </a>
              </div>
            </li>

            <li>
              <img className='imgProject' src={project3} alt="project2" />
              <div className="textProject">
                <h1>Sistema Solar</h1>
                <p>Esse projeto foi aplicado em React com a criação de componentes de classe e passagem de props. Essa aplicação simula uma visualização do Sistema Solar,
                  bem como informações sobre diversas missões espacias que ocorreram ao longo da história.</p>
              </div>
              <div className="btnProject">
                <a href="https://github.com/carolhn/Projeto-Solar-System" target="blank_">
                  <button className='btnOne'>Repositorio</button>
                </a>
              </div>
            </li>

            <li>
              <img className='imgProject' src={project4} alt="project2" />
              <div className="textProject">
                <h1>Jogo Trivia</h1>
                <p>O projeto foi desenvolvido em grupo de 4 pessoas. Esse jogo de perguntas e respostas é 
                  baseado no Trivia, nele utilizamos React e Redux e Testes para garantir sua funcionalidade.</p>
              </div>
              <div className="btnProject">
                <a href="https://github.com/carolhn/Projeto-Jogo-Trivia" target="blank_">
                  <button className='btnOne'>Repositorio</button>
                </a>
              </div>
            </li>

            <li>
              <img className='imgProject' src={project5} alt="project2" />
              <div className="textProject">
                <h1>App de Receitas</h1>
                <p>O projeto foi desenvolvido em grupo de 5 pessoas.
                  Nesse projeto foi consumido 2 APIs a TheMealDB API e The CockTailDB API, no projeto utilizamos
                  React, Redux, Context API e React Hooks.
                </p>
              </div>
              <div className="btnProject">
                <a href="https://github.com/carolhn/Projeto-App-recipe" target="blank_">
                  <button className='btnOne'>Repositorio</button>
                </a>
              </div>
            </li>
          </ul>
      </div>
    )
  }
}

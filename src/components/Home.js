import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from './Header'
import imgHome from '../images/home.png'
import '../style/Home.css'

export default class Home extends Component {
  render() {
    const { history } = this.props;
    return (
        <main>
          <header>
          <title>Caroline Nunes Desenvolvedora Front-end JR</title>
          </header>
          <Header history={ history } />
          <div className='background'>
            <img className='homeImg' src={imgHome} alt="img"></img>
              <main className='title-container-home'>
                <h1 className='title-home'>OLÁ, SEJA</h1>
                <h1 className='title-home'>BEM-</h1>
                <h1 className='title-home'>VINDO(A)</h1>
              </main>
              <div className="hello">
                <h3 className='title2 type-animation'>Meu nome é Caroline Nunes</h3>
              </div>
              <h4 className='title3 type-animation2'>Sou Desenvolvedora Web Full Stack</h4>
          </div>
        </main>
    )
  }
}

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};
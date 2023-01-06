import React, { Component } from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom';

export default class Header extends Component {
 render() {
    return (
      <header className='page-header'>
        <div className='container'>
          <h3 className='title-header'> CAROLINE_</h3>
          <h3 className='title-header2'> NUNES+</h3>
        </div>
        <section className='nav'>
        <Link
            className='home'
            activeClassName="is-active"
            to="/"
            exact
        >
          Home
        </Link>
        <Link
            className='about'
            activeClassName="is-active"
            to="/about"
            exact
        >
          Sobre Mim
        </Link>
        <Link
            className='skill'
            activeClassName="is-active"
            to="/skills"
            exact
        >
          Skills
        </Link>
        <Link
            className='project'
            activeClassName="is-active"
            to="/pro"
            exact
        >
          Projetos
        </Link>
        <Link
            className='contat'
            activeClassName="is-active"
            to="/contact"
            exact
        >
          Contato
        </Link>
      </section>
      </header>
    )
  }
}

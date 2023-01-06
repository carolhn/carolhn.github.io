import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Skills from './components/Skills'
import Project from './components/Project'


class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path="/skills" component={ Skills } />
          <Route exact path="/pro" component={ Project } />
        </Switch>
      </main>
    )
  }
}

export default App
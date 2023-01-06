import React, { useRef } from 'react';
import technologies from '../api/technologies';
import Tech from './Tech';
import '../style/Skills.css';
import Header from './Header'

export default function Technologies() {
  const ref = useRef();

  return (
    <div>
    <Header />
    <section className="technologies-container" ref={ref}>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
      <h1 className='title-skills'>SKILLS.</h1>
      <section className="technologies-wrapper">
        { technologies.map(({name, ...imgProps}, i)=> (
          <Tech name={name} {...imgProps} key={i} i={i} />
        ))}
      </section>
    </section>
    </div>
  );
}

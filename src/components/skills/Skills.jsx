import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend  from './Backend';
import Mobile from './Mobile';
import QA from './QA';

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Minhas Habilidades</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Mobile />
            <QA />
        </div>
    </section>
  )
}

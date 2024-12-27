import React from 'react';
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Smith</a>

        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>
              </a>Home
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
              </a>About
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
              </a>Skills
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
              </a>Services
            </li>

            <li className="nav__item">
              <a href="portifolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
              </a>Portifólio
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
              </a>Contact
            </li>
          </ul>

          <i class="uil uil-times nav__close"></i>
        </div>

        <div className="nav__toggle">
          <i class="uil uil-apps"></i>
        </div>
      </nav>

    </header>
  )
}

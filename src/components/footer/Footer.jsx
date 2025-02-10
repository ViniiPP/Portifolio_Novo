import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Vinícius</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#portifolio" className="footer__link">Projetos</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Serviços</a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                    href="www.instagram.com/eu_viniipp" 
                    className="footer__social-link" 
                    target='_blank'
                    >
                    <i class="uil uil-instagram"></i>
                </a>

                <a 
                    href="www.linkedin.com/in/vinicius-pereira-polli17" 
                    className="footer__social-link" 
                    target='_blank'
                    >
                    <i class="uil uil-linkedin"></i>
                </a>

                <a 
                    href="www.github.com/ViniiPP" 
                    className="footer__social-link" 
                    target='_blank'
                    >
                    <i class="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Vinícius Pereira Polli. Todos os direitos reservados.</span>
        </div>
    </footer>
  )
}

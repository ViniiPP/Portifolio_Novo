import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
            {
                publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            }
        )

        .then(() => {
          setMessageSent(true);
          e.target.reset();

          // Remove a mensagem após 3 segundos
          setTimeout(() => setMessageSent(false), 3000);
        })
        .catch((error) => console.log('Erro ao enviar e-mail:', error));
    };

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Contato</h2>
        <span className="section__subtitle">Contate-me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Formas de Contato</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">E-mail</h3>
                        <span className="contact__card-data">vinippolli@gmail.com</span>

                        <a href="mailto:vinippolli@gmail.com" className="contact__button">Escreva <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                     
                    <div className="contact__card">
                        <i className="bx bxl-instagram contact__card-icon"></i>

                        <h3 className="contact__card-title">Instagram</h3>
                        <span className="contact__card-data">@eu_viniipp</span>

                        <a href="https://www.instagram.com/eu_viniipp" rel="noopener noreferrer" className="contact__button">Seguir <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Ou escreva sobre o seu projeto</h3>

                <form ref={form} onSubmit={sendEmail}
                className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Nome</label>
                        <input 
                            type="text" 
                            name='name' 
                            className='contact__form-input' 
                            placeholder='Escreva seu nome'/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">E-mail</label>
                        <input 
                            type="email" 
                            name='email' 
                            className='contact__form-input' 
                            placeholder='Escreva seu e-mail'/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Projeto</label>
                        <textarea 
                            name="project" 
                            cols="30" 
                            rows="10" 
                            className='contact__form-input' 
                            placeholder='Escreva sobre seu projeto'>
                        </textarea>
                    </div>

                    <button className="button button--flex">
                        Enviar Mensagem
                        <svg
                            class="button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            >
                            <path
                                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                fill="var(--container-color)"
                            ></path>
                        </svg>
                    </button>
                    {/* Exibição da mensagem de sucesso */}
                    {messageSent && (
                        <p className="contact__success-message">
                            ✅ Mensagem enviada com sucesso!
                        </p>
                    )}
                </form>
            </div>
        </div>
    </section>
  )
}

import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Desenvolvimento BackEnd</h3>

        <div className="skills__box">

            {/* grupo 01 */}
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Avançado</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Node JS</h3>
                        <span className="skills__level">Avançado</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Spring Boot</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>
            </div>

            {/* grupo 02 */}
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Rest API</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">PostgreSQL</h3>
                        <span className="skills__level">Avançado</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Backend;

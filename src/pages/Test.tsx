import React from "react";
import styled from "styled-components";
import './test.css';

interface TestProps {

}


const Test: React.FC<TestProps> = ({}) => {
    return (
        <>
            <div className="Content">
                <header className="header" id="screen1">
                    <img className="logo"/>
                    <div className="menu">
                        <a href='#' className="menu-about">About me</a>
                        <a href='#' className="menu-education">Education</a>
                        <a href='#' className="menu-work">Work Experience</a>
                        <a href='#' className="menu-skills">Skills</a>
                        <a href='#' className="menu-contacts">Contacts</a>
                    </div>
                </header>
                <section className="about" id="screen2">
                    <p className="hello">
                        Hello!<br/>
                        My name is Alex Smith<br/>
                        I'm creative front-end developer
                    </p>
                    <img className="Image"/>
                </section>
                <section className="education" id="screen3">
                    <div className="text-very-big" style={{lineHeight: '48px'}}>Education</div>
                    <div className="educations-table">
                        <div className="col">
                            <div className="education-cell">
                                <div className="education-cell-header">
                                    <div className="text-big">Kingston university</div>
                                    <div className="text-subheader">Master's degree - Software Engineering</div>
                                </div>
                                <div className="text-year">2019 - 2021</div>
                            </div>
                            <div className="education-cell">
                                <div className="education-cell-header">
                                    <div className="text-big">Kingston university</div>
                                    <div className="text-subheader">Bachelor's degree - Computer Engineering</div>
                                </div>
                                <div className="text-year">2015 - 2019</div>
                            </div>
                            <div className="education-cell">
                                <div className="education-cell-header">
                                    <div className="text-big">Westminster School</div>
                                    <div className="text-subheader">Diploma's degree - Mathematics</div>
                                </div>
                                <div className="text-year">2013 - 2015</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="education-cell">
                                <div className="education-cell-header">
                                    <div className="text-big">Kingston university</div>
                                    <div className="text-subheader">Master's degree - Software Engineering</div>
                                </div>
                                <div className="text-year">2019 - 2021</div>
                            </div>
                            <div className="education-cell">
                                <div className="education-cell-header">
                                    <div className="text-big">Kingston university</div>
                                    <div className="text-subheader">Bachelor's degree - Computer Engineering</div>
                                </div>
                                <div className="text-year">2015 - 2019</div>
                            </div>
                            <div className="education-cell">
                                <div className="education-cell-header">
                                    <div className="text-big">Westminster School</div>
                                    <div className="text-subheader">Diploma's degree - Mathematics</div>
                                </div>
                                <div className="text-year">2013 - 2015</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="work" id="screen4">
                    <div className="text-very-big-work" style={{lineHeight: '48px'}}>Work Experience</div>
                    <div className="buttons-group">
                        <a href="#" className="button-apl">Apple</a>
                        <a href="#" className="button-mcr">Microsoft</a>
                        <a href="#" className="button-fb">Facebook</a>
                    </div>
                    <div className="work-info">
                        <div className="col" style={{gap: '16px'}}>
                            <div className="work-box">
                                <div className="text-big-work">Front-end Developer Apple.Inc</div>
                                <div className="text-middle-work">California, United States</div>
                            </div>
                            <div className="text-year-2">Nov 2020 - Present · Full-time</div>
                            <div className="text1">
                                <p style={{margin: 0}}>В начале XX века немецкие психологи провели исследования восприятия
                                    человеком окружающего
                                    мира. Они выявили естественное стремление человека найти порядок в беспорядке.</p>
                                <p>Их эксперименты
                                    показали, что когда мозг обрабатывает полученные образы, он воспринимает
                                    разрозненные элементы как единое
                                    целое. Подсознательно мы пытаемся группировать похожие элементы, распознавать
                                    закономерности и таким образом
                                    упрощать сложные образы.
                                </p>
                            </div>
                        </div>
                        <img className="Image"
                             style={{width:'554px',
                                 height:'400px',
                                 background: 'black'
                             }}
                        />
                    </div>
                </section>
                <section className="skills" id="screen5">
                    <div className="text-very-big" style={{lineHeight: '48px'}}>Skills</div>
                    <div className="skills-table">
                        <div className="skills-col">
                            <div className="skill-item">
                                <div className="skill-name">React</div>
                                <div className="skill-value-wrap">
                                    <div className="bar value-react"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">Angular</div>
                                <div className="skill-value-wrap">
                                    <div className="bar value-angular"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">HTML + CSS</div>
                                <div className="skill-value-wrap">
                                    <div className="bar value-html-css"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">Javascript</div>
                                <div className="skill-value-wrap">
                                    <div className="bar value-javascript"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">Python</div>
                                <div className="skill-value-wrap">
                                    <div className="bar value-python"></div>
                                </div>
                            </div>
                        </div>
                        <div className="skills-col">
                            <div className="skill-item">
                                <div className="skill-name">Soft skill</div>
                                <div className="skill-value-wrap">
                                    <div className="bar value-soft-skill"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">Motion graphics</div>
                                <div className="skill-value-wrap">
                                    <div className="bar value-motion-graphics"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">UX</div>
                                <div className="skill-value-wrap">
                                    <div className="bar value-ux"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">UI</div>
                                <div className="skill-value-wrap">
                                    <div className="bar value-ui"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">3D</div>
                                <div className="skill-value-wrap">
                                    <div className="bar value-3d"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="skills-form">
                        <div className="text-big-skill">Add new skill</div>
                        <div className="row" style={{height: '80px'}}>
                            <div className="form-field">
                                <div className="text-normal">Skill name</div>
                                <div className="text-field-wrapper"></div>
                            </div>
                            <div className="form-field">
                                <div className="text-normal">Skill proficiency percentage, %</div>
                                <div className="text-field-wrapper"></div>
                            </div>
                            <div className="btn" style={{height: '48px'}}>Add</div>
                        </div>
                    </div>
                </section>
                <section className="block" id='screen6'>
                    <div className="text-very-big" style={{lineHeight: '48px'}}>Contacts</div>
                    <div className="contacts-box" style={{height: '400px', gap:'32px'}}>
                        <a href="#">
                            <div className="info-box">
                                <img className="pic-pin"/>
                                <div className="header-contacts">
                                    <div className="text-big-contacts">Address</div>
                                    <div className="text-subheader-contacts">16 Lva Tolstogo str., Moscow</div>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div className="info-box">
                                <img className="pic-phone"/>
                                <div className="header-contacts">
                                    <div className="text-big-contacts">Phone</div>
                                    <div className="text-subheader-contacts">+7 (000) 000 00 00</div>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div className="info-box">
                                <img className="pic-mail"/>
                                <div className="header-contacts">
                                    <div className="text-big-contacts">E-Mail</div>
                                    <div className="text-subheader-contacts">myemail@yandex.ru</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
                <div className="footer" id='screen7'>
                    <div className="footer-links">
                        <a href="#">
                            <img className="pic-instagram"/>
                        </a>
                        <a href="#">
                            <img className="pic-github"/>
                        </a>
                        <a href="#">
                            <img className="pic-twitter"/>
                        </a>
                        <a href="#">
                            <img className="pic-linkedin"/>
                        </a>
                    </div>
                    <div className="text-date-footer">&copy; 2023</div>
                </div>
            </div>
        </>
    )
};

export default Test;
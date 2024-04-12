import '../css/style.css';
import React from 'react';
import contacto from '../images/contacto.png';
import web_desing from '../images/web-desing.jpg';
import profile from '../images/1678488008176.jpg';
import empresas from '../images/edificios.png';
import hojalateria from '../images/cubo-de-pintura.png';
import estrena from '../images/carro-deportivo.png';
import directorio from '../images/directorio-telefonico.png';
import refacciones from '../images/spare-parts.png';
import buscador from '../images/buscador.png';
import maquinaria from '../images/excavador.png';
import camiones from '../images/camion.png';
function Prueba() {
    let WhatsApp = 'https://api.whatsapp.com/send?phone=5574703963&text=Hola,%20Donovan%20me%20interesa%20tu%20perfíl.';
    let Linkedin = 'https://www.linkedin.com/in/donovan-eduardo-hern%C3%A1ndez-guerrero-5948a8149/';
    let _blank = '_blank';
    let cv = './cv/c.v-donovan.pdf';
    let url_empresas = 'https://empresaseingresodigno.org/';
    let ur_hojalateria = 'https://www.zapata.com.mx/freightliner/hojalateria-y-pintura';
    let url_estrena = 'https://www.zapata.com.mx/estrena';
    let url_refacciones = 'https://zapata.com.mx/greatdane/refacciones';
    let url_directorio = 'https://www.zapata.com.mx/directorio';
    let url_buscador = 'https://zapata.com.mx/buscador';
    let url_maquinaria = 'https://zapata.com.mx/maquinaria-pesada';
    let url_camiones = 'https://zapata.com.mx/freightliner';
    function Correo() {
        document.getElementById('contact').innerHTML = '';
        document.getElementById('contact').innerHTML = 'donovanhg180@gmail.com';
    }
    function Telefono() {
        document.getElementById('contact').innerHTML = '';
        document.getElementById('contact').innerHTML = '+52 5574703963';    
    }
    let url_home = '#fontColor';
    let url_about = '#about';
    let url_skillls = '#skills';
    let url_portfolio = '#portfolio';
    return(
        
        <>
        <section id='menu'>
            <ol>
                <li><a className='link' href={url_home}><i className='fas fa-home'></i></a></li>
                <li><a className='link' href={url_about}><i className='fas fa-user'></i></a></li>
                <li><a className='link' href={url_skillls}><i className='fas fa-book'></i></a></li>
                <li><a className='link' href={url_portfolio}><i className='fas fa-flag'></i></a></li>
                {/* <li><a className='link' href='#'><i className='fas fa-comment'></i></a></li> */}
            </ol>
        </section>
        <section id='fontColor'>
            <div className='fontImg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                            <h1 className='titulo'>Donovan Eduardo Hernández Guerrero</h1>
                            <h4 className='subtitulo'><span className='c1'>Programador</span> <span className='c2'>Web</span></h4>
                        </div>
                        <div className='col-12 col-md-7'>
                            <img src={web_desing} className='web-desing' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                        <h5 className='educationTitle laboral'>Experiencia Laboral</h5>
                        <div className='linea-tiempo'>
                            <div className='momento'>
                                <h3>Julio/2019 – Octubre/2019</h3>
                                <div className='descripcion'>
                                    <strong>EFD Programador Web Jr</strong>
                                    <br/><br/>
                                    Participé activamente en el desarrollo de un CRM, 
                                    durante mis prácticas profesionales. Contribuí a la implementación 
                                    y mantenimiento de diversas funci onalidades clave, colaborando estrechamente 
                                    con el equipo de desarrollo para asegurar la eficiencia y la usabilidad del sistema. 
                                    Mis responsabilidades incluyeron la programación en Codeigniter, la integración de 
                                    tecnologías front-end como HTML, CSS3, JavaScript, jQuery, y la implementación de 
                                    características avanzadas utilizando Ajax y JSON.
                                </div>
                            </div>
                            <div className='momento'>
                                <h3>09/05/2020 - Actualmente</h3>
                                <div className='descripcion'>
                                    <strong>Grupo Zapata Programador Web</strong>
                                    <br/><br/>
                                    Programador web especializado en Laravel con sólidos conocimientos en HTML, CSS3, JavaScript, jQuery, Bootstrap, JSON, Ajax y DataTables. Experiencia en el desarrollo de aplicaciones web eficientes y atractivas, con habilidades para la creación de interfaces dinámicas y funcionales
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
                        <div className="card">
                            <img src={contacto} className="card-img-top img-portfolio" alt="" />
                            <div className="card-body">
                                <strong>MEDIOS DE CONTACTO</strong>
                                <div className='contacto'>
                                    <a target={_blank} href={WhatsApp}>
                                        <i id='icono-contacto' className='fab fa-whatsapp'></i>
                                    </a>
                                    <a onClick={Telefono}>
                                        <i id='icono-contacto' className='fa fa-phone'></i>
                                    </a>
                                    <a target={_blank} href={Linkedin}>
                                        <i id='icono-contacto' className='fab fa-linkedin'></i>
                                    </a>
                                    <a onClick={Correo}>
                                        <i id='icono-contacto' className='far fa-envelope'></i>
                                    </a> 
                                </div>
                                <div className="card-text">
                                    <p id='contact'></p>
                                </div>
                                <a target={_blank} className='button-17' href={cv}>Descargar CV</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
                        <div className="card">
                            <img src={profile} className="card-img-top profile" alt="" />
                            <div className="card-body">
                                <strong>PERFIL</strong>
                                <p className="card-text">
                                    Desempeñarme de manera eficiente, 
                                    aplicando mis conocimientos y de igual 
                                    forma, poder innovar con las nuevas 
                                    tecnologías que hoy en día son las más 
                                    utilizadas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12'>
                        <h1 className='title'>Mis Skills</h1>
                    </div>
                    <div className='col-12 col-sm-4 col-md-6 col-lg-4'>
                        <div className='c-skill'>
                            <p className='skill-title'>Frontend</p>
                            <div className='row'>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>HTML5</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>CSS3</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>JS</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>BOOTSTRAP</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>FLEXBOX</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>JQUERY</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 col-md-6 col-lg-4'>
                        <div className='c-skill'>
                            <p className='skill-title'>Backend</p>
                            <div className='row'>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>PHP(LARAVEL)</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>MYSQL</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>PHP(CODEIGNITER)</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>AJAX</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>WORKBENCH</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>JSON</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 col-md-12 col-lg-4'>
                        <div className='c-skill'>
                            <p className='skill-title'>Otros Skills</p>
                            <div className='row'>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>JAVA</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>MVC</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>FILEZILLA</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>DOMPDF</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>CPANEL</p>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6'>
                                    <p className='skill'><i className="skill-icon fas fa-caret-square-right"></i>DATA TABLES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='portfolio'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12'>
                        <h1 className='title'>Portafolio</h1>
                    </div>
                    <div className='col-6 col-sm-4 col-md-4 col-lg-4'>
                        <div className="card card-portfolio">
                            <img src={empresas} className="card-img-top img-portfolio" alt="" />
                            <div className="card-body">
                                <p className="card-text">Empresas e Ingreso Digno</p>
                                <a target={_blank} className='button-17' href={url_empresas}>Ver sitio</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-sm-4 col-md-4 col-lg-4'>
                        <div className="card card-portfolio">
                            <img src={hojalateria} className="card-img-top img-portfolio" alt="" />
                            <div className="card-body">
                                <p className="card-text">Hojalatería y pintura</p>
                                <a target={_blank} className='button-17' href={ur_hojalateria}>Ver sitio</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-sm-4 col-md-4 col-lg-4'>
                        <div className="card card-portfolio">
                            <img src={estrena} className="card-img-top img-portfolio" alt="" />
                            <div className="card-body">
                                <p className="card-text">E-Commerce Estrena</p>
                                <a target={_blank} className='button-17' href={url_estrena}>Ver sitio</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-sm-4 col-md-4 col-lg-4'>
                        <div className="card card-portfolio">
                            <img src={refacciones} className="card-img-top img-portfolio" alt="" />
                            <div className="card-body">
                                <p className="card-text">E-Commerce Refacciones</p>
                                <a target={_blank} className='button-17' href={url_refacciones}>Ver sitio</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-sm-4 col-md-4 col-lg-4'>
                        <div className="card card-portfolio">
                            <img src={directorio} className="card-img-top img-portfolio" alt="" />
                            <div className="card-body">
                                <p className="card-text">Directorio de agencias</p>
                                <a target={_blank} className='button-17' href={url_directorio}>Ver sitio</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-6 col-sm-4 col-md-4 col-lg-4'>
                        <div className="card card-portfolio">
                            <img src={buscador} className="card-img-top img-portfolio" alt="" />
                            <div className="card-body">
                                <p className="card-text">Buscador de agencias</p>
                                <a target={_blank} className='button-17' href={url_buscador}>Ver sitio</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-6 col-sm-4 col-md-4 col-lg-4'>
                        <div className="card card-portfolio">
                            <img src={maquinaria} className="card-img-top img-portfolio" alt="" />
                            <div className="card-body">
                                <p className="card-text">Maquinaria pesada</p>
                                <a target={_blank} className='button-17' href={url_maquinaria}>Ver sitio</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-6 col-sm-4 col-md-4 col-lg-4'>
                        <div className="card card-portfolio">
                            <img src={camiones} className="card-img-top img-portfolio" alt="" />
                            <div className="card-body">
                                <p className="card-text">Camiones</p>
                                <a target={_blank} className='button-17' href={url_camiones}>Ver sitio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Prueba;
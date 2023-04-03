import React from 'react'
import "./Foote.css"
import { Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { TfiLocationPin } from "react-icons/tfi"
import { HiOutlinePhone } from "react-icons/hi"
import { CgMail } from "react-icons/cg"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div>
              <h1 className='text-white fs-5 fw-800'>Glamour's gold</h1>
            </div>
            <p className="footer__text mt-4">Desde collares cortos y delicados hasta collares largos y llamativos, con piedras preciosas, perlas, diamantes, oro, plata, entre otros materiales.
              Desde pequeños pendientes de botón hasta grandes pendientes colgantes, con diamantes, rubíes, zafiros, entre otros.
              Desde pulseras simples y elegantes hasta pulseras de diseño con piedras preciosas y adornos.
              Desde anillos clásicos de compromiso y bodas hasta anillos de moda con piedras de colores y diseños únicos.
            </p>
          </Col>
          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Categorias</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <p><Link to='#'>Collares</Link></p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <p><Link to='#'>Pendientes</Link></p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <p><Link to='#'>Pulseras</Link></p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <p><Link to='#'>Anillos</Link></p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Secciones</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <p><Link to='#'>Tienda</Link></p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <p><Link to='#'>Carrito</Link></p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <p><Link to='#'>Iniciar sesion</Link></p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <p><Link to='#'>Politicas de privacidad</Link></p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contactos</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><TfiLocationPin /></span>
                  <p>Bella Vista Santo Domingo Rep Dom</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><HiOutlinePhone /></span>
                  <p>+1 829-546-4565</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><CgMail /></span>
                  <p>Yeimi@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright text-center"><span>&#169;</span> copyright {year} desarrollado por Yeimi Bonilla.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Helmet } from '../components/helmet/Helmet'
import heroImg from "../assests/images/hero-img.png"
import "../styles/Home.css"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import Services from '../services/Services'
import Productlist from './../components/UI/Productlist';
import products from "../assests/data/products"
import CounterImg from "../assests/images/counter-timer-img.png"
import Clock from '../components/UI/Clock'

const Home = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingData = products.filter(item => item.category === 'anillo')
    const filteredBestSalesProducts = products.filter(item => item.category === 'aretes')
    const filteredMobileProducts = products.filter(item => item.category === 'collar')
    const filteredwirelessProducts = products.filter(item => item.category === 'pulsera')
    const filteredPopularProducts = products.filter(item => item.category === 'watch')

    setTrendingProducts(filteredTrendingData);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredwirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, [])

  return (
    <Helmet title="Home">
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className='hero__subtitle'>Productos de tendencia en {year} </p>
                <h2>Joyas que te hacen brillar en cualquier ocasión</h2>
                <p>En nuestra tienda de joyería encontrarás piezas únicas y elegantes que reflejan tu estilo y personalidad. Desde delicados collares hasta audaces pulseras, cada joya es una obra de arte diseñada con pasión y artesanía experta. Descubre la belleza y el brillo que te mereces con nuestra colección de joyería exclusiva. ¡Haz una declaración de moda con nosotros!</p>
                <motion.button whileTap={{ scale: 1.1 }} className="buy__btn"><Link to="shop">COMPRA AHORA</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero" />
              </div>
            </Col>
          </Row>
        </Container>

      </section>

      <Services />

      <section className='trending__product'>
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className="section__title">Productos de tendencia</h2>
            </Col>
            <Productlist ProductData={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className='best__sales'>
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className="section__title">Mejores ventas</h2>
            </Col>
            <Productlist ProductData={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__counter">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__upper-content">
                <h4 className='text-white fs-6 mb-2'>Oferta limitada</h4>
                <h3 className='text-white fs-6 mb-3' >Par de aretes</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.1 }} className="store__btn"><Link to='/shop'>Visitar la tienda</Link></motion.button>
            </Col>
            <Col lg="6" md="6" className='text-end counter__img'>
              <img src={CounterImg} alt="counter" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className='text-center mb-5'>
              <h2 className="section__title">Mejores ventas</h2>
            </Col>
            <Productlist ProductData={mobileProducts} />
            <Productlist ProductData={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className='text-center mb-5'>
              <h2 className="section__title">Populares en la categoría</h2>
            </Col>
            <Productlist ProductData={popularProducts} />
          </Row>
        </Container>
      </section>


    </Helmet>
  )
}

export default Home

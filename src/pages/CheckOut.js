import React, { useEffect } from 'react'
import { Helmet } from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col, FormGroup } from 'reactstrap';
import "../styles/Checkout.css"
import { useSelector } from 'react-redux';

const CheckOut = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h4 className='mb-4 fw-bold'>Información de facturación</h4>
              <form action="" className='billing__form'>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Nombre' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Telefono' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Email' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Ciudad' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Calle' />
                </FormGroup>
                <button className="buy__btn mt-2 text-white" onClick={(e) => e.preventDefault()}>Submit</button>
              </form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h4 className=' fw-bold'>Resumen</h4>
                <hr className='text-dark mt-3 ' />
                <h6>Cantidad total <span>{totalQuantity}</span></h6>
                <h6>SubTotal <span>${totalAmount}</span></h6>
                <h6> <span>Envío: <br />Envío gratis</span> <span>$0</span></h6>
                <hr className='text-dark mt-3 ' />
                <h4>Total Cost <span>${totalAmount}</span></h4>
                <button className="buy__btn auth__btn w-100">Haz un pedido</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CheckOut

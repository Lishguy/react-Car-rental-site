import React from 'react'
import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'
import FindCarForm from '../components/UI/FindCarForm'
import AboutSection from '../components/UI/AboutSection'
import ServiceList from '../components/UI/ServiceList'
import carData from '../assets/data/carData'
import CarItem from '../components/UI/CarItem'
import BecomeDriver from '../components/UI/BecomeDriver'
import Testimonial from '../components/UI/Testimonial'
import BlogList from '../components/UI/BlogList'

const Home = () => {
  return <Helmet title='Home'>

    {/* hero section  */}
    <section className="p-0 hero__slider-section">
       <HeroSlider />   
       <div className="hero__form">
          <Container>
            <Row className='form__row'>
              <Col lg='4' md='4'>
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg='8' md='8' sm='12'>
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>                                                                                
    </section>

    {/* about section */}
      <AboutSection/>

      {/* service section  */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className="section__subtitle">See Our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* car item  */}
      <section>
        <Container>
          <Row>
            <Col lg='12'  className='mb-5 text-center'>
              <h6 className="section__subtitle">Come With</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0,6).map((item) => (
                <CarItem item={item} key={item.id} />
              ))}
          </Row>
        </Container>
      </section>

      {/* Become driver  */}
      <BecomeDriver />


      {/* Testimonial  */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4 text-center'>
              <h6 className="section__subtitle">Our Clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>
            <Testimonial/>
          </Row>
        </Container>
      </section>

      {/* BlogList  */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className="section__subtitle">Explore Our Blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col> 
            <BlogList/>
          </Row>
        </Container>
      </section>
      
  </Helmet>
}

export default Home

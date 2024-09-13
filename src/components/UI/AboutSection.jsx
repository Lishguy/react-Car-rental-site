import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/AboutSection.css'
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = () => {
  return <section className='about__section'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className="about__section-content">
                    <h4 className="section__subtitle">About Us</h4>
                    <h2 className="section__title">Welcome to Car rental Service</h2>
                    <p className="section__description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur at rem, 
                        commodi in eum nostrum! Ab consequuntur libero tenetur nesciunt unde molestias 
                        corrupti rem facilis iure animi perspiciatis dolorem itaque totam error quas, 
                        repudiandae sit dolor optio voluptatibus quaerat laboriosam pariatur. Quam illo 
                        sunt, eius assumenda omnis officia corrupti minima.
                    </p>

                    <div className="about__section-item d-flex align-items-center">
                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet  
                        
                        </p>

                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet    
                        </p>

                    </div>

                    <div className="about__section-item d-flex align-items-center">
                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet 
                    
                        </p>

                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet 
                        </p>

                    </div>


                </div>
            </Col>

            <Col lg='6' md='6'>
                <div className="about__">
                    <img src={aboutImg} alt=""
                    className='w-100' />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default AboutSection

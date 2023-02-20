import React from 'react'
import  './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/4.png';

function Footer() {

  const year = new Date().getFullYear();
  return ( 
   <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
          
              <img src={logo} height="60" />
            
            
         
          <p className='footer_text mt-4'>
          Unlock the power of freelance talent for your business needs with our expert hiring services.
          </p>
        </Col>
        <Col lg='3' md='3' className='mb-4'>
          <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Top Categories</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Freelancer</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Software Dveloper</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Mobile Developer</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Full Stack Developer</Link>
              </ListGroupItem>
           </ListGroup>   
          </div>
        </Col>
        <Col lg='2' md='3' className='mb-4'>
        <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'> Avaliable Gigs</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>

           </ListGroup>   
          </div>

        </Col>
        <Col lg='3' md='4'>
          <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Contact</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>Kathmandu Nepal</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
              <span><i class="ri-phone-line"></i></span>
              <p>+977-9840358372</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
              <span><i class="ri-mail-line"></i></span>
              <p>prashantxtim@gmail.com</p>
              </ListGroupItem>
           </ListGroup>   
          </div>
        </Col>
         <Col lg='12'>
          <p className="footer__copyright text-center">Copyright {year}, FreeLance HQ  All right reserved.</p>
         </Col>
      </Row>
    </Container>
  </footer>
 )
}

export default Footer;
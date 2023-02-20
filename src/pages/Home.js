
import { useState, useEffect } from 'react'
import Helmet from "../components/Helmet/Helmet.js";
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/onlinepic.png';
import counterImg from '../assets/images/counter-timer-img.png';

import Services from '../components/services/Services'

import ProductsList from './../components/UI/ProductsList';

import products from './../assets/data/products';
import Clock from '../components/UI/Clock';



import { ListGroup, ListGroupItem } from 'reactstrap';
import gigServices from '../services/gigServices.js';


function Home({isLogged, setIsLogged}){
  
  const [work, setwork] = useState([]);
  
  const year = new Date().getFullYear();

  useEffect(()=>{


    
    gigServices.getAll().then((response) => {
      console.log(response.data);
      setwork(response.data);
    })
    .catch((error) => {
      console.log(error);
    }
    )

 

  },[])

    return (
      
      
      <Helmet title={"Home"}>
        
      <section className="hero__section">

          </section>
          
        <Services/>
        <section className="trending__products">
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section__title pb-5'>Available Gigs</h2>
              </Col>
              <ProductsList data={work}/>
            </Row>
          </Container>
        </section>
   
        
       
       
      </Helmet>
    );
}

export default Home;
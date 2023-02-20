import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link, useParams , useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { toast } from 'react-toastify';

import gigServices from '../services/gigServices';

function Addwork () {
    
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
    const [additional, setAdditional] = useState("")
    const navigate = useNavigate();
      
    const updatework = async (e) => {
        
        
        e.preventDefault();
        try{
        const res = await gigServices.create({title,price,desc,additional});
        console.log(res);
        navigate('/work')
        return toast.success('Gig Added Successfully')

        }catch(error){
            console.log(error);
            return toast.error('Gig Failed')
        }
    }

    return (
        <Helmet title='Work  details Update'>
        <section>
          <Container>
            <Row>
               
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4'>Add New Gigs </h3>
                <Form  onSubmit={updatework} className='auth__form'>
                <FormGroup  className='form__group'>
                    <input 
                    type="text" 
                    placeholder="Gig Tittle"
                    value={title} 
                    onChange={(e)=> setTitle(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder="Price Per Hour"
                    value={price} 
                    onChange={(e)=> setPrice(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder="Work Description"
                    value={desc} 
                    onChange={(e)=> setDesc(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder= "Additional"
                    value={additional} 
                    onChange={(e)=> setAdditional(e.target.value)} />
                  </FormGroup>
                 


              
                <button type='submit' onClick={updatework}  className="buy__btn auth__btn">Add Gig </button>
                
     
              </Form>
             </Col>
              
           </Row>
         </Container>
        </section>
  
       </Helmet>
    )

}

export default Addwork
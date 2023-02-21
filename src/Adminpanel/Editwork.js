import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link, useParams , useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { toast } from 'react-toastify';
import gigServices from '../services/gigServices';

// this is edit work

function EditWork ({work}) {
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [worktype, setWorktype] = useState("");
    const[shift, setShift] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
      
    const updatework = async (e) => {
        console.log(work._id);
        console.log(name, description,image, worktype,shift,time,location)
        e.preventDefault();
        setImage(work.image)
        try{
        const res = await gigServices.update(work._id,{ name, description, worktype,shift,time,location,image});
        console.log(res);
        navigate('/work')
        return toast.success('update successfully')

        }catch(error){
            console.log(error);
            return toast.error('update failed')
        }
    }

    return (
        <Helmet title='Work  details Update'>
        <section>
          <Container>
            <Row>
               
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4'>Work details </h3>
                <Form  onSubmit={updatework} className='auth__form'>
                <FormGroup  className='form__group'>
                    <input 
                    type="text" 
                    placeholder={work.name}
                    value={name} 
                    onChange={(e)=> setName(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder={work.time}
                    value={time} 
                    onChange={(e)=> setTime(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder={work.description}
                    value={description} 
                    onChange={(e)=> setDescription(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder= {work.location} 
                    value={location} 
                    onChange={(e)=> setLocation(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text"
                    placeholder={work.shift}
                    value={shift} 
                    onChange={(e)=> setShift(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text"
                    placeholder={work.worktype}
                    value={worktype}
                    onChange={(e)=> setWorktype(e.target.value)} />
                  </FormGroup>


              
                <button type='submit' onClick={updatework}  className="buy__btn auth__btn">Update </button>
                
     
              </Form>
             </Col>
              
           </Row>
         </Container>
        </section>
  
       </Helmet>
    )

}

export default EditWork
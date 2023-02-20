import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link, useParams , useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { toast } from 'react-toastify';
import userSevices  from '../services/userSevices';

// admin edit page


function Editpage ({user}) {
    
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
const[phoneNumber,setPhone]=useState("");
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
      
    
    const updateuser = async (e) => {
        e.preventDefault();
        
        try {
          const res = await userSevices.updateuser(user._id,{firstName, lastName, phoneNumber, password});
          console.log(res);
            navigate('/adminhome')
          return toast.success('update successfully')
            } catch (error) {
          console.log(error);
          return toast.error('update failed')
        }
       
      }

    return (
        <Helmet title='User details Update'>
        <section>
          <Container>
            <Row>
               
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4'>User Update</h3>
                <Form className='auth__form'>
                <FormGroup  className='form__group'>
                    <input 
                    type="text" 
                    placeholder={user.firstName}
                    value={firstName} 
                    onChange={(e)=> setFirstname(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder={user.lastName}
                    value={lastName} 
                    onChange={(e)=> setLastname(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder={user.phoneNumber}
                    value={phoneNumber} 
                    onChange={(e)=> setPhone(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                  <input 
                    type="password" 
                    placeholder='Enter your password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}  />
                </FormGroup>
              
                <button type='submit' onClick={updateuser} className="buy__btn auth__btn">Update Profile</button>
                
     
              </Form>
             </Col>
              
           </Row>
         </Container>
        </section>
  
       </Helmet>
    )

}

export default Editpage
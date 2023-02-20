import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link  } from 'react-router-dom';
import '../styles/login.css';
import { toast } from 'react-toastify';
import userSevices  from '../services/userSevices';


function Userdetails({isLogged, setIsLogged}){
    const [user, setUser] = useState({});


    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");

    const [password, setPassword] = useState('');
  
    

    useEffect(() => {
        userSevices.getoneuser(isLogged).then((response) => {
            console.log(response.data);
            setUser(response.data);
            })
            .catch((error) => {
            console.log(error);
            }
            )
    },[])


    const updateuser = async (e) => {
        e.preventDefault();
        
        try {
          const res = await userSevices.updateuser(isLogged,{ firstname, lastname,password,phone});
          console.log(res);
            
          localStorage.clear();
          window.location= "/login"
          return toast.success('update successfully')
            } catch (error) {
          console.log(error);
          return toast.error('update failed')
        }
       
      }
    

    return(
        <Helmet title='Update Profile'>
        <section>
          <Container>
            <Row>
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4'>Update your Profile </h3>
                <Form className='auth__form'>
                <FormGroup  className='form__group'>
                    <input 
                    type="text" 
                    placeholder="First Name"
                    value={firstname} 
                    onChange={(e)=> setFirstname(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder="Last Name"
                    value={lastname} 
                    onChange={(e)=> setLastname(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder="Phone Number"
                    value={phone} 
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

export default Userdetails
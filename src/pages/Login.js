import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link ,useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { toast } from 'react-toastify';
import userSevices  from '../services/userSevices';
import logo from '../assets/images/freeLogo.png';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await userSevices.login(email, password);
      window.localStorage.setItem('token', data.token);
      window.localStorage.setItem('userid', data.userid);
      window.localStorage.setItem('role', data.role);
      console.log(data.role);
      if(data.role === 'Admin'){
        window.location.reload();

        navigate('/adminhome');

      }
        else{
          console.log("loginSuccessfull");
          window.location.reload();

          navigate('/home');
        }
     
      return toast.success('Login successful');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return toast.error(error.response.data);
      }
    }
  }


  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
            <img className='mb-4' src={logo} height="150" alt="logo" />
            <Form onSubmit={handlelogin} className='auth__form'>
              <FormGroup className='form__group'>
                <input 
                  type="email" 
                  placeholder='Enter your email'
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup className='form__group'>
                <input 
                  type="password" 
                  placeholder='Enter your password' 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}  />
              </FormGroup>
              <button type='submit' className="buy__btn auth__btn">Login</button>
              <p>Don't have an account?{" "} 
                <Link to='/signup'>Create and account</Link>
              </p>
            </Form>
        </Col>
            
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Login;
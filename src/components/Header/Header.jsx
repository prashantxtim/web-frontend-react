import { useEffect, useState ,useRef} from "react";
import { ListGroup, ListGroupItem, Dropdown, DropdownItem, DropdownMenu, DropdownToggle  } from "reactstrap";
import userSevices from "../../services/userSevices";

import  './header.css';
import { NavLink, useNavigate, Link, } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/images/4.png';
import userIcon from '../../assets/images/user-icon.png';

import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';




const Header = ()=> {

  const headerRef = useRef(null);
  /* cart to redux and use totalquantity for cart */
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const [dropdownOpen,setOpen] = useState([])
  const menuRef =useRef(null);

  const navigate = useNavigate();
   
  /*Sticky Scroll  */
  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll', () => {
     if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) { 
       headerRef.current.classList.add('sticky__header')
     } else{
     headerRef.current.classList.remove('sticky__header')
    }
    });
 };

const logout = (e) => {
    e.preventDefault();

    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userid");
    window.localStorage.removeItem("role");
    navigate("/login");
  
    return toast.success("Logout Successfully");
      

  }
  const [islogged, setIsLogged] = useState("");
  const [user,setuser] =  useState({});
const [role,setrole] = useState("");
  useEffect(()=>{
    

    const id = window.localStorage.getItem("userid")
    const role = window.localStorage.getItem("role")
    setIsLogged(id)
    setrole(role)
    console.log(id)
    
    userSevices.getoneuser(id).then((profile)=>{
    
      setuser(profile.data)
    }).catch((err) =>{
      console.log(err)
    })
    stickyHeaderFunc();

    return()=> window.removeEventListener('scroll', stickyHeaderFunc)
    
    

  },[])

  const menuToggle = ()=> menuRef.current.classList.toggle('active__menu')

  /* cart navigate */
  const navigateToCart = ()=>{
      navigate('/cart')
  }; 

  const nav__links = [
 

    role ===  "Admin" ? {

      
    display : "Users",
   path : "/adminhome"
    }:
    {
      display: "Home",
      path: "/home",
    },
    role ===  "Admin" ? {

      
      display : "Gigs",
      path : "/work"
    
        } :
    {
      display: "Gigs",
      path: "/shop",
    },
    role ===  "Admin" ? {
      display : "Order",
      path : "/order"
    
        } :
    {
      display: "Cart",
      path: "/cart",
    },
 
  
    
  ];


  return (
    <header className="header" ref={headerRef}>

    

{ islogged !== null ? 
    <Container>
     <Row>
        <div className="nav__wrapper">
            <div>
              {role === "Admin" ? <Link to='/adminhome'><h5>Admin Dashboard</h5></Link> : 
              <Link to='/'><img src={logo} className="nav-brand" height="30"></img></Link>}

            </div>
          {/* Toggle Menu*/}
              <div className='navigation' ref={menuRef} onClick={menuToggle}>
                <motion.ul className='menu'>
                  {/*Nav */}
                    {nav__links.map((item, index) => (
                      <li className='nav__item' key={index}>
                        <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''} > 
                        {item.display}</NavLink>
                      </li>  
                    ))}
                </motion.ul>
              </div>

              <div className="nav__icons">
                
                
                <span className='cart__icon' onClick={navigateToCart}>
                  <i class="ri-shopping-basket-line"></i>
                  <span className='badge'>{totalQuantity}</span>
                </span>
                <Dropdown toggle={() => { setOpen(!dropdownOpen) }}
                isOpen={dropdownOpen}>
        <DropdownToggle
        
          tag="span"
          data-boundary="viewport"
          onClick={() => { setOpen(!dropdownOpen) }}
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}
        >
          {user.firstName}
        </DropdownToggle>
        <DropdownMenu >
          <Link to="/userdetails" ><i class="ri-profile-line" color="warning"></i>  Update Profile</Link>
          <DropdownItem divider />
          <span onClick={logout}><i class="ri-logout-box-fill"></i> Logout</span>
        </DropdownMenu>
      </Dropdown>                {/*mobile menu= */}
                <span className='mobile__menu' onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>  
            </div>    
        </div> 
      </Row>
    </Container>
    : 
      <Container>
       <Row>
          <div className="nav__wrapper">
              <div>
               
                <Link to='/'><img src={logo} className="nav-brand" height="30"></img></Link>
  
              </div>
            {/* Toggle Menu*/}
                <div className='navigation' ref={menuRef} onClick={menuToggle}>
                  <motion.ul className='menu'>
                    {/*Nav */}
                      {nav__links.map((item, index) => (
                        <li className='nav__item' key={index}>
                          <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''} > 
                          {item.display}</NavLink>
                        </li>  
                      ))}
                  </motion.ul>
                </div>
  
                <div className="nav__icons">
                  
                  
                  <span className='cart__icon' onClick={navigateToCart}>
                    <i class="ri-shopping-basket-line"></i>
                    <span className='badge'>{totalQuantity}</span>
                  </span>
                  <span className='profile'>
                    <Link to="/login">          
                     <img src={userIcon} alt=''></img>
                    </Link>
                    <span>
                </span>
                  </span>  
                  {/*mobile menu= */}
                  <span className='mobile__menu' onClick={menuToggle}>
                    <i class="ri-menu-line"></i>
                  </span>  
              </div>    
          </div> 
        </Row>
      </Container>
      }
  </header>

  );
}

export default Header;
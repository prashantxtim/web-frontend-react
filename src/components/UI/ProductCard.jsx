import React from 'react'
//import productImg from '../../assets/images/arm-chair-01.jpg';
import { motion } from 'framer-motion';
import '../../styles/productCard.css'
import { Col } from "reactstrap";
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';

import { useEffect } from 'react';
import gigServices from '../../services/gigServices';




function ProductCard({ item }) {

  const dispatch = useDispatch();

  /* for Add product items in  cart  details cart.jsx*/
  const addToCart =()=>{

      dispatch(cartActions.addItem({
        id: item._id,
        productName: item.title,
        price: item.price,
        imgUrl: item.attachment,

      })
    );
     toast.success('Product added successfully');
  };

  



  return (  
    <Col lg='3' md='4' className='mb-2'>
        <div className='Product__item'>
            <div className='Product__img'>
              <motion.img whileHover={{ scale: 0.9 }} src={item.attachment} alt='' />
            </div>
            <div className='p-2 product__info'>
              <h3 className='product__name'>
                <Link to={`/shop/${item.id}`}>{item.title}</Link>
              </h3>
              <span>{item.worktype}</span>
            </div> 
            <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
              <span className='price'>€{item.price}</span>
              <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
                <i class="ri-add-line"></i>
              </motion.span>
            </div>
      </div> 
    </Col>
  );
}

export default ProductCard
import React, { useEffect, useState } from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import gigServices from '../services/gigServices';
import ProductsList from '../components/UI/ProductsList';


function Shop() {
      //shop filter all products
      const [productsData, setProductsData] = useState([ ])

      useEffect(()=>{
        gigServices.getAll().then((gig)=>{
          console.log(gig.data)
          setProductsData(gig.data)
        })

      })
    
     


     /* I did search filter by item.productName not in item.category  */

    

  return (
    <Helmet title='Gigs'>
      <CommonSection title='' />
       <section className='pt-0'>
        <Container className='pt-5'>
          <Row>
            {/* we show sofa passed here and filter Products */}
            {
              productsData.length === 0? <h1 className='text-center fs-4'>No Products are found!</h1>
              : <ProductsList data={productsData} />
            }
          </Row>
        </Container>

       </section> 
    </Helmet>
  )

          }
export default Shop;
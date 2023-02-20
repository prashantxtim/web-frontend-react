import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Orderadmin() {
    const navigator= useNavigate()
  const deleteuser = (id) => {
    var response = window.confirm("Are you sure you want to delete this user?");
    if (response) {
      navigator("/adminhome")
      return toast.success("Order Delete Successful")
    }
  };

  return (
    <Helmet title="Admin dashbaord">
      
      <CommonSection title="" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Title</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th> Action </th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td></td>
                        <td>
                         
                          
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>                     
                        <td>
                          <Link
                            
                            className="btn btn-primary"
                          >
                            Edit
                          </Link>
                          <button
                           
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>

                  <td></td>
                </tbody>
              </table>
             <Link to={"/addwork"} className="btn btn-secondary"> Add New Work</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Orderadmin;

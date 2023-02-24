import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "./../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import gigServices from "../services/gigServices";

// this is work js
function Workadmin({ work, setwork }) {
  useEffect(() => {
    gigServices.getAll().then((res) => {
      setwork(res.data);
      console.log(res.data);
    });
  }, []);

  const deleteuser = (id) => {
    var response = window.confirm("Are you sure you want to delete this user?");
    if (response) {
      gigServices
        .remove(id)
        .then((response) => {
          console.log(response.data);
          setwork(work.filter((work) => work._id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
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
                    <th> ID </th>
                    <th> Image</th>
                    <th>Work Title</th>
                    <th>Description </th>
                    <th>Price</th>
                    <th> Action </th>
                  </tr>
                </thead>
                <tbody>
                  {work.map((work) => {
                    return (
                      <tr>
                        <td>{work._id}</td>
                        <td>
                          <div className="Product__img">
                            <motion.img
                              whileHover={{ scale: 0.9 }}
                              src={               
                                work.attachment
                              }
                              alt=""
                            />
                          </div>
                        </td>
                        <td>{work.title}</td>
                        <td>{work.desc}</td>
                        <td>${work.price}</td>                     
                        <td>
                          <Link
                            to={`/editwork/${work._id}`}
                            className="btn btn-primary"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteuser(work._id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
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

export default Workadmin;

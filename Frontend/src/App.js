import React from 'react'
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap'
import {ToastContainer, toast} from 'react-toastify'
import Home from './Components/Home'
// import Course from './Components/Course'
import AllCourses from './Components/AllCourses'
import AddCourse from './Components/AddCourse';
import UpdateCourse from './Components/UpdateCourse';
import Header from './Components/Header.js'
import Menus from './Components/Menus';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {

  const btnHandle = () => 
  {
    toast.error("done", {
      position: "top-center"
    })
  }

  return (
    <>
    <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Container>
        <Header></Header>
          <Row>
            <Col md = {4}>
            <Menus></Menus>
            </Col>
            <Col md = {8}>
              <Route path = "/" component = {Home} exact></Route>
              <Route path = "/add-course" component = {AddCourse} exact></Route>
              <Route path = "/all-courses" component = {AllCourses} exact></Route>
              {/* <Route path = "/about" component = {About} exact></Route>
              <Route path = "/contact" component = {Contact} exact></Route> */}
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { Fragment, useEffect, useState } from 'react'
import {Container, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import axios from 'axios'
import base_url from './../api/bootapi'
import { toast } from 'react-toastify'

const AddCourse = () =>{
    useEffect(() => {
        document.title = "AddCourse"
    }, [])

    const [course, setCourse] = useState({})

    //form handler
    const handleForm = (e) => {
        console.log(course)
        postDataToServer(course)
        e.preventDefault()
    }

    //posting data on server
    const postDataToServer = (data) =>{
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response)
                console.log("success")
                toast.success("Courses has been added")
                setCourse({id:"", title:"", description:""})
            },
            (error) => {
                console.log(error)
                console.log("error")
                toast.error("Something went wrong")
            }
        )
    }

    return(
        <Fragment>
        <h1 className = "text-center my-3">Fill Course Details</h1>
            <Form onSubmit = {handleForm}>
                <FormGroup>
                    <Label for = "userId">Course Id</Label>
                    <Input 
                        type = "text" 
                        placeholder = "Enter Here" 
                        name = "userId" 
                        id = "userId"
                        onChange = {(e) => {
                            setCourse({...course, id:e.target.value})
                        }}>
                    </Input>               
                </FormGroup>
                <FormGroup>
                    <Label for = "title">Course Title</Label>
                    <Input 
                        type = "text" 
                        placeholder = "Enter Title Here" 
                        name = "title" 
                        id = "title"
                        onChange = {(e) => {
                            setCourse({...course, title:e.target.value})
                        }}>
                    </Input>               
                </FormGroup>
                <FormGroup>
                    <Label for = "description">Course Description</Label>
                    <Input 
                        type = "textarea" 
                        placeholder = "Enter Description Here" 
                        name = "description" 
                        id = "description"
                        style = {{height : 100}}
                        onChange = {(e) => {
                            setCourse({...course, description:e.target.value})
                        }}
                        >
                    </Input>               
                </FormGroup>
                <Container className = "text-center">
                    <Button type = "submit" color = "success">Add Course</Button>
                    <Button type ="reset" color = "warning ml-3">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;
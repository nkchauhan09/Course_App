import React, { Fragment, useEffect } from 'react'
import {Container, Form, FormGroup, Input, Label, Button } from 'reactstrap'

const UpdateCourse = () =>{
    useEffect(() => {
        document.title = "UpdateCourse"
    }, [])
    return(
        <Fragment>
        <h1 className = "text-center my-3">Update Course Details</h1>
            <Form>
                <FormGroup>
                    <Label for = "userId">Course Id</Label>
                    <Input 
                        type = "text" 
                        placeholder = "Enter Here" 
                        name = "userId" 
                        id = "userId">
                    </Input>               
                </FormGroup>
                <FormGroup>
                    <Label for = "title">Course Title</Label>
                    <Input 
                        type = "text" 
                        placeholder = "Enter Title Here" 
                        name = "title" 
                        id = "title">
                    </Input>               
                </FormGroup>
                <FormGroup>
                    <Label for = "description">Course Description</Label>
                    <Input 
                        type = "textarea" 
                        placeholder = "Enter Description Here" 
                        name = "description" 
                        id = "description"
                        style = {{height : 100}}>
                    </Input>               
                </FormGroup>
                <Container className = "text-center">
                    <Button color = "success">Update Course</Button>
                    <Button color = "warning ml-3">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default UpdateCourse;
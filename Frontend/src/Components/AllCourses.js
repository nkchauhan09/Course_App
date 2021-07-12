import React, { useState, useEffect } from 'react'
import Course from './Course'
import base_url from './../api/bootapi'
import axios from 'axios'
import { toast } from 'react-toastify'

const AllCourses = () => {

    useEffect(() => {
        document.title = "AllCourses"
    }, [])

    //function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success
                console.log(response.data)
                toast.success("Courses has been loaded")
                setCourses(response.data)
            },
            (error) => {
                //error
                console.log(error)
                toast.error("Something went wrong")
            }
        )
    }

    //calling loading course function
    useEffect(() => {
        getAllCoursesFromServer()
    }, [])

    const [courses, setCourses] = useState([])

    const UpdateCourses = (id) => {
        setCourses(courses.filter((c) => c.id != id))
    }

    return (
        <div>
            <h1>All Courses</h1>
            <p>List Of Courses : </p>
            {
                courses.length > 0
                    ? courses.map((item) => (
                        <Course course={item} update = {UpdateCourses}></Course>
                    )) : "No Courses"
            }
        </div>
    )
}

export default AllCourses
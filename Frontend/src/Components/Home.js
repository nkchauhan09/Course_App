import React, {useEffect} from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'

const Home = () => {
    useEffect(()=>{
        document.title = "Home"
    }, [])
    return (
        <div>
            <Jumbotron className = "text-center">
                <h1>Course App</h1>
                <p>This is developed by Neeraj Kumar Chauhan.
                Its backend is springboot and front end is React js.
                </p>
                <Container>
                    <Button color = "primary" outline>Start CourseApp</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home
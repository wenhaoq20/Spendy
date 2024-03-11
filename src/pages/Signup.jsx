import React, { useState } from "react";
import { Container, Card, Form, Button, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { ArrowLeftCircle } from 'react-bootstrap-icons';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigator = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirmPassword){
            console.error("The passwords do not match!");
            return;
        }
        try {
            navigator("/home");
            /* TODO implement with supasbase*/
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Navbar>
                <Container fluid>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigator(-1)}> <ArrowLeftCircle /> Back</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="d-flex align-items-center justify-content-center min-vh-100">
                <Card>
                    <Card.Body>
                        <Card.Title>Spendy</Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" hasValidation>
                                <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                <Form.Control type="password" placeholder="Comfirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>

        </>
    )
}

export default Signup;
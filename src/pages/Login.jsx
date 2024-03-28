import React, { useState } from "react";
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            navigate("/home");
            // TODO: Implement authentication with Supabase
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center min-vh-100">
            <Card className="login-card">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Spendy</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Card.Link href="/signup">New to Spendy? Create a new account</Card.Link>
                </Card.Footer>
            </Card>
        </Container>
    );
}

export default Login;

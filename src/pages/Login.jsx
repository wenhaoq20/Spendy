import React, { useState } from "react";
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigator = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            navigator("/home");
            /* TODO implement with supasbase*/
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Spendy</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer> <Card.Link href="/signup">New to Spendy? Create a new account</Card.Link></Card.Footer>
            </Card>
        </Container>
    )
}

export default Login;
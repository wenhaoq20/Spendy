import React, { useState } from "react";
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                            <Form.Control type="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <Form.Control type="password" placeholder="Comfirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Signup;
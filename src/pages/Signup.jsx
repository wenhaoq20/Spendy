import React, { useState } from "react";
import { Container, Card, Form, Button, Navbar, Nav, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import "./Signup.css"; // Ensure this CSS file is updated with the styles mentioned below

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("The passwords do not match!");
            return;
        }
        try {
            navigate("/home");
            // TODO: Implement authentication with Supabase
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Navbar bg="light" expand="lg" className="mb-4">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate(-1)}><ArrowLeftCircle size={20} /> Back</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
                <Card className="signup-card">
                    <Card.Body>
                        <Card.Title className="text-center mb-4">Sign Up to Spendy</Card.Title>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Signup;
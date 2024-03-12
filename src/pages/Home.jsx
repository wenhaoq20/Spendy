import React from "react";
import { Container, Navbar, Nav, Row, Col, Card } from 'react-bootstrap';
import { Gear, PersonCircle } from 'react-bootstrap-icons';

const Home = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Spendy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#settings">
                            <Gear size='30' />
                        </Nav.Link>
                        <Nav.Link href="#profile">
                            <PersonCircle size='30' />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <h1>Welcome to Spendy</h1>
                        <p>Your personal budget management tool. Track your expenses, manage your budget, and save money effectively.</p>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Recent Transactions</Card.Title>
                                <Card.Text>
                                    Placeholder for recent transactions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Budget Summary</Card.Title>
                                <Card.Text>
                                    Placeholder for budget summary.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Savings Goals</Card.Title>
                                <Card.Text>
                                    Placeholder for savings goals.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
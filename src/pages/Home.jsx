import React from "react";
import { Container, Navbar, Nav, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Gear, PersonCircle } from 'react-bootstrap-icons';
import "./Home.css";
import { recentTransactions, budgetSummary, savingsGoals } from '../utilis/FakeData';

const Home = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#home">Spendy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#settings">
                                <Gear size={30} />
                            </Nav.Link>
                            <Nav.Link href="#profile">
                                <PersonCircle size={30} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-5">
                <Row className="justify-content-md-center text-center">
                    <Col md={8}>
                        <h1>Welcome to Spendy</h1>
                        <p>Your personal budget management tool. Track your expenses, manage your budget, and save money effectively.</p>
                    </Col>
                </Row>

                <Row className="mt-4 g-4">
                    <Col md={4}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title>Recent Transactions</Card.Title>
                                <ListGroup variant="flush">
                                    {recentTransactions.map((transaction) => (
                                        <ListGroup.Item key={transaction.id}>{transaction.description}: {transaction.amount}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title>Budget Summary</Card.Title>
                                <ListGroup variant="flush">
                                    {budgetSummary.map((item, index) => (
                                        <ListGroup.Item key={index}>{item.category}: Spent {item.spent} of {item.budget}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title>Savings Goals</Card.Title>
                                <ListGroup variant="flush">
                                    {savingsGoals.map((goal, index) => (
                                        <ListGroup.Item key={index}>{goal.goal}: Saved {goal.saved} of {goal.target}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;

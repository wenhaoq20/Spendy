import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Gear, PersonCircle } from 'react-bootstrap-icons';

const Home = () => {
    return (
        <>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand>Spendy</Navbar.Brand>
                    <div>
                        <Gear />
                        <PersonCircle />
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Home;
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavbarLink from '../components/NavbarLink';

export function Layout() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('/');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleLogoClick = () => {
        setActiveLink('/');
    };

    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                        <Image src="image/images.png" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <NavbarLink to="/" activeLink={activeLink}>
                                Strona glowna
                            </NavbarLink>
                            <NavDropdown title="Sklep" id="navbarScrollingDropdown">
                                <NavbarLink to="/zakupy" activeLink={activeLink}>
                                    Zakup produkty
                                </NavbarLink>
                                <NavbarLink to="/towar" activeLink={activeLink}>
                                    Dodaj towar do bazy
                                </NavbarLink>
                                <NavbarLink to="/promocje" activeLink={activeLink}>
                                    Ustaw promocje
                                </NavbarLink>
                            </NavDropdown>
                            <NavDropdown title="Dostawy" id="navbarScrollingDropdown">
                                <NavbarLink to="/zamowienia" activeLink={activeLink}>
                                    Najblizsze dostawy
                                </NavbarLink>
                                <NavbarLink to="/zwroty" activeLink={activeLink}>
                                    Zrob zwroty
                                </NavbarLink>
                            </NavDropdown>
                            <NavDropdown title="Magazyn" id="navbarScrollingDropdown">
                                <NavbarLink to="/szukaj" activeLink={activeLink}>
                                    Sprawdz dostepnosc
                                </NavbarLink>
                                <NavbarLink to="/magazyn" activeLink={activeLink}>
                                    Sprawdz magazyn
                                </NavbarLink>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Szukaj" className="me-2" aria-label="Szukaj" />
                            <Button variant="outline-success">Szukaj</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="px-3">
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={6} md={4} lg={3} className="mt-3 sidebar">
                            <Card>
                                <Nav variant="underline" defaultActiveKey="/" className="flex-column px-3">
                                    <NavbarLink to="/zakupy" activeLink={activeLink}>
                                        Zakupy
                                    </NavbarLink>
                                    <NavbarLink to="/towar" activeLink={activeLink}>
                                        Dodaj towar
                                    </NavbarLink>
                                    <NavbarLink to="/zamowienia" activeLink={activeLink}>
                                        Zamowienia
                                    </NavbarLink>
                                    <NavbarLink to="/magazyn" activeLink={activeLink}>
                                        Magazyn
                                    </NavbarLink>
                                    <NavbarLink to="/promocje" activeLink={activeLink}>
                                        Promocje
                                    </NavbarLink>
                                    <NavbarLink to="/zwroty" activeLink={activeLink}>
                                        Zwroty
                                    </NavbarLink>
                                    <NavbarLink to="/szukaj" activeLink={activeLink}>
                                        Szukaj towaru
                                    </NavbarLink>
                                </Nav>
                            </Card>
                        </Col>
                        <Col>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Layout;

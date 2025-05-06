import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Outlet, Link } from 'react-router-dom';

function App() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Link to="/zakupy" className="d-block">
                        <Card className="kafelki">
                            <Card.Img variant="top" src="image/zakupy.png" className="photo" />
                            <Card.Body className="karta">
                                <Card.Title>Zakupy</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Link to="/towar" className="d-block">
                        <Card className="kafelki">
                            <Card.Img variant="top" src="image/dodajTowar.png" className="photo" />
                            <Card.Body className="karta">
                                <Card.Title>Dodaj towar</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Link to="/zamowienia" className="d-block">
                        <Card className="kafelki">
                            <Card.Img variant="top" src="image/zamowienia.png" className="photo" />
                            <Card.Body className="karta">
                                <Card.Title>Zamowienia</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Link to="/magazyn" className="d-block">
                        <Card className="kafelki">
                            <Card.Img variant="top" src="image/magazyn.png" className="photo" />
                            <Card.Body className="karta">
                                <Card.Title>Magazyn</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Link to="/promocje" className="d-block">
                        <Card className="kafelki">
                            <Card.Img variant="top" src="image/promocja.png" className="photo" />
                            <Card.Body className="karta">
                                <Card.Title>Promocje</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Link to="/zwroty" className="d-block">
                        <Card className="kafelki">
                            <Card.Img variant="top" src="image/zwrot.png" className="photo" />
                            <Card.Body className="karta">
                                <Card.Title>Zwroty</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Link to="/szukaj" className="d-block">
                        <Card className="kafelki">
                            <Card.Img variant="top" src="image/szukaj.png" className="photo" />
                            <Card.Body className="karta">
                                <Card.Title>Szukaj towaru</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}
export default App;
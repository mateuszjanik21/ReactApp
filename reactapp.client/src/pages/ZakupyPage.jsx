import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Produkt from '../components/Produkt';

export const Zakupy = () => {
    return (
        <Container className="cont">
            <Form>
                <Row>
                    <Tabs defaultActiveKey="zakupy" id="zakupy" className="mb-3">
                        <Tab eventKey="zakupy" title="Zakupy">
                            <Row>
                                <h2>Wybierz produkt lub wprowadz ID produktu</h2>
                                <Col xs={12} md={6}>
                                    <Form.Group>
                                        <Form.Label>Wybierz produkt</Form.Label>
                                        <Form.Control as="select">
                                            <option value="">Wybierz...</option>
                                            <optgroup label="Leki przeciwbolowe">
                                                <option value="Paracetamol">Paracetamol</option>
                                                <option value="Ibuprofen">Ibuprofen</option>
                                            </optgroup>
                                            <optgroup label="Suplementy diety">
                                                <option value="WitaminaC">Witamina C</option>
                                                <option value="WitaminaD">Witamina D</option>
                                            </optgroup>
                                            <optgroup label="Kosmetyki">
                                                <option value="Szampon">Szampon</option>
                                                <option value="Balsam do wlosow">Balsam do wlosow</option>
                                            </optgroup>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group>
                                        <Form.Label>ID produktu</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadz ID produktu" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group>
                                <Form.Label>Ilosc sztuk</Form.Label>
                                <Form.Control type="number" min="1" defaultValue="1" />
                            </Form.Group>
                            <Button className="przycisk mt-3">
                                Dodaj do koszyka <i className="fas fa-cart-plus"></i>
                            </Button>
                        </Tab>

                        <Tab eventKey="koszyk" title="Koszyk">
                            <Row>
                                <Col xs={12} lg={6}>
                                    <h2 className="h2">Produkty</h2>
                                    <div className="divider" />

                                    <Produkt
                                        image="image/paracetamol.png"
                                        name="Paracetamol Biofarm 500 mg"
                                        price="4,89"
                                        packageSize="10"
                                        quantity="1"
                                    />

                                    <div className="divider" />

                                    <Produkt
                                        image="image/witaminaD.png"
                                        name="D-Vitum Forte 2000 j.m."
                                        price="18,39"
                                        packageSize="60"
                                        quantity="1"
                                    />

                                    <div className="divider" />

                                    <Row>
                                        <Col className="d-flex align-items-center mt-1">
                                            <Button size="sm" variant="danger" className="przyciskWyczyscKoszyk">Wyczysc koszyk</Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <Row>
                                        <Col className="mt-3">
                                            <div className="podsumowanie">
                                                <h2>Podsumowanie</h2>
                                                <div className="divider2" />
                                                <h4>Suma: 23,28 zl</h4>
                                                <div className="divider2" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col sm={6}>
                                            <Form.Group className="mb-1">
                                                <Form.Control type="text" placeholder="Wprowadz kod rabatowy" />
                                            </Form.Group>
                                            <Button size="sm" variant="secondary" className="przyciskKoszyk">Zastosuj kod</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-1">
                                            <div className="divider2" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col className="d-flex justify-content-end">
                                            <Button variant="success" size="lg" className="przycisk6">Przejdz do platnosci</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Row>
            </Form>
        </Container>
    )
}

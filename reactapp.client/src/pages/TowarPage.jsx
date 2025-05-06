import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const Towar = () => {
    const [activeTab, setActiveTab] = useState('danePodstawowe');
    const [barcode, setBarcode] = useState('');

    const handleDodajCeneClick = () => {
        setActiveTab('cena');
    };

    const handleGenerateBarcode = () => {
        const randomBarcode = Math.random().toString(36).substr(2, 12).toUpperCase();
        setBarcode(randomBarcode);
    };

    return (
        <Container className="cont">
            <Form>
                <Row>
                    <Tabs
                        activeKey={activeTab}
                        onSelect={(k) => setActiveTab(k)}
                        id="daneTowaru"
                        className="mb-3"
                    >
                        <Tab eventKey="danePodstawowe" title="Dane Podstawowe">
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nazwa</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kod kreskowy</Form.Label>
                                        <Form.Control type="text" value={barcode} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Button className="przyciskGenerujKod" onClick={handleGenerateBarcode}>Generuj kod</Button>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Ilosc sztuk</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group className="mb3">
                                        <Form.Label>Okres przydatnosci</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Grupa towarow</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Tabletki</option>
                                            <option value="2">Syropy</option>
                                            <option value="3">Witaminy i mineraly</option>
                                            <option value="4">Sprzet medyczny</option>
                                            <option value="5">Inne</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="success" size="lg" className="przycisk6" onClick={handleDodajCeneClick}>Dodaj cene</Button>
                        </Tab>
                        <Tab eventKey="cena" title="Cena">
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena netto</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>VAT</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">0%</option>
                                            <option value="2">5%</option>
                                            <option value="3">8%</option>
                                            <option value="4">23%</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>PKWiU</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Ilosc w magazynie</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="success" size="lg" className="przycisk6">Dodaj towar</Button>
                        </Tab>
                        <Tab eventKey="uwagi" title="Uwagi">
                            <Row>
                                <Col xs={12} md={8}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Dodatkowe informacje</Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Uwagi</Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="success" size="lg" className="przycisk6">Zapisz</Button>
                        </Tab>
                    </Tabs >
                </Row >
            </Form >
        </Container >
    );
};

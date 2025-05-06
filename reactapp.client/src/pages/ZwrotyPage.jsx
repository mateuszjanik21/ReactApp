import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination';

export const Zwroty = () => {
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [returnHistory, setReturnHistory] = useState([
        { item: 'Paracetamol', reason: 'Niezgodnosc produktu', date: '13.03.2024' },
        { item: 'Witamina C', reason: 'Produkt uszkodzony', date: '17.02.2024' },
        { item: 'Apap', reason: 'Zly rozmiar', date: '21.04.2024' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowAlert(true);
            setReturnHistory([
                { item: 'Paracetamol', reason: 'Niezgodnosc produktu', date: '13.03.2024' },
                { item: 'Witamina C', reason: 'Produkt uszkodzony', date: '17.02.2024' },
                { item: 'Apap', reason: 'Zly rozmiar', date: '21.04.2024' },
            ]);
        }, 2000);
    };

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => setShowAlert(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const fetchedProducts = [
                'Aspirin',
                'Apap',
                'Ambroxol',
                'Ibuprofen',
                'Paracetamol',
            ];
            setProducts(fetchedProducts);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    return (
        <Container className="zakladki mt-4">
            <Tab.Container defaultActiveKey="add-return">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="add-return">Dodaj do zwrotu</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="return-history">Historia zwrotow</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="return-policy">Polityka Zwrotow</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="contact-support">Kontakt</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="add-return">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Dodaj do zwrotu</Card.Title>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group controlId="returnItem">
                                                <Form.Label>Przedmiot zwrotu</Form.Label>
                                                <Dropdown onSelect={(eventKey) => setSelectedProduct(eventKey)}>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        {selectedProduct || 'Wybierz produkt'}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        {products.map((product, index) => (
                                                            <Dropdown.Item key={index} eventKey={product}>
                                                                {product}
                                                            </Dropdown.Item>
                                                        ))}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Form.Group>
                                            <Form.Group controlId="returnReason">
                                                <Form.Label>Powod zwrotu</Form.Label>
                                                <Form.Control as="textarea" rows={3} placeholder="Wprowadz powod zwrotu" />
                                            </Form.Group>
                                            <Form.Group controlId="returnDate">
                                                <Form.Label>Data zwrotu</Form.Label>
                                                <Form.Control type="date" />
                                            </Form.Group>
                                            <Form.Group controlId="returnReceipt">
                                                <Form.Label>Zalacznik (paragon)</Form.Label>
                                                <Form.Control type="file" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit" className="mt-3" disabled={loading || !selectedProduct}>
                                                {loading ? (
                                                    <>
                                                        <Spinner
                                                            as="span"
                                                            animation="border"
                                                            size="sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                        /> Dodawanie...
                                                    </>
                                                ) : (
                                                    'Dodaj do zwrotu'
                                                )}
                                            </Button>
                                        </Form>
                                        {showAlert && (
                                            <Alert variant="success" className="mt-3">
                                                Zwrot na produkt "{selectedProduct}" został pomyślnie dodany.
                                            </Alert>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="return-history">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Historia zwrotow</Card.Title>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Przedmiot zwrotu</th>
                                                    <th>Powod zwrotu</th>
                                                    <th>Data</th>
                                                    <th>Akcje</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {returnHistory.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.item}</td>
                                                        <td>{item.reason}</td>
                                                        <td>{item.date}</td>
                                                        <td>
                                                            <Button variant="success" size="sm">Akceptuj</Button>{' '}
                                                            <Button variant="danger" size="sm">Odrzuc</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        <Pagination className="justify-content-center mt-4">
                                            <Pagination.First />
                                            <Pagination.Prev />
                                            <Pagination.Item active>{1}</Pagination.Item>
                                            <Pagination.Next />
                                            <Pagination.Last />
                                        </Pagination>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="return-policy">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Polityka Zwrotow</Card.Title>
                                        <Card.Text>
                                            <p>
                                                Nasza polityka zwrotow zapewnia, ze ​​mozesz zwrocic kazdy produkt w ciagu 30 dni od daty zakupu.
                                                Produkt musi byc w oryginalnym stanie i opakowaniu.
                                            </p>
                                            <p>
                                                Aby uzyskac wiecej informacji, skontaktuj sie z naszym dzialem obslugi klienta.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="contact-support">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Kontakt</Card.Title>
                                        <Form>
                                            <Form.Group controlId="contactName">
                                                <Form.Label>Twoje imie</Form.Label>
                                                <Form.Control type="text" placeholder="Wprowadz swoje imie" />
                                            </Form.Group>
                                            <Form.Group controlId="contactEmail">
                                                <Form.Label>Twoj email</Form.Label>
                                                <Form.Control type="email" placeholder="Wprowadz swoj email" />
                                            </Form.Group>
                                            <Form.Group controlId="contactMessage">
                                                <Form.Label>Wiadomosc</Form.Label>
                                                <Form.Control as="textarea" rows={3} placeholder="Wprowadz swoja wiadomosc" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit" className="mt-3">
                                                Wyslij wiadomosc
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

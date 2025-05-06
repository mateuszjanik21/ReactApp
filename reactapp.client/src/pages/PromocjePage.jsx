import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';

export const Promocje = () => {
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [discount, setDiscount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowAlert(true);
        }, 2000);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(false);
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
        <Container className="cont mt-4">
            <h2 className="mb-4">Ustaw obnizke produktu</h2>
            <Tabs defaultActiveKey="newDiscount" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="newDiscount" title="Nowa Obnizka">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="product">
                            <Form.Label>Nazwa produktu</Form.Label>
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
                        <Form.Group controlId="discount">
                            <Form.Label>Obnizka (w procentach)</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="number"
                                    placeholder="Wprowadz obnizke w procentach"
                                    value={discount}
                                    onChange={(e) => setDiscount(e.target.value)}
                                />
                                <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3" disabled={loading || !selectedProduct || !discount}>
                            {loading ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    /> Ustawianie...
                                </>
                            ) : (
                                'Ustaw obnizke'
                            )}
                        </Button>
                    </Form>
                    {showAlert && (
                        <Alert variant="success" className="mt-3">
                            Promocja na produkt "{selectedProduct}" zostala pomyslnie ustawiona na {discount}% obnizki.
                        </Alert>
                    )}
                </Tab>
                <Tab eventKey="currentPromotions" title="Aktualne Promocje">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Produkt</th>
                                <th>Obnizka</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Aspirin</td>
                                <td>10%</td>
                                <td>
                                    <Button variant="danger" size="sm">Usun</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Apap</td>
                                <td>15%</td>
                                <td>
                                    <Button variant="danger" size="sm">Usun</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Pagination className="justify-content-center mt-4">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Tab>
            </Tabs>
        </Container>
    );
};

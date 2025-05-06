import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import { GoSearch } from "react-icons/go";
import DeliveryCard from '../components/DeliveryCard';

export const Zamowienia = () => {
    const [deliveryHistory, setDeliveryHistory] = useState([
        { orderId: '67456', deliveryDate: '2024.04.20', products: ['Ibuprom MAX Sprint Kapsulki 40 kap', 'HealthLabs Vitamin B Complex 60 szt.'], orderValue: '23,28', pickupDate: '25.04.2024', pickupPerson: 'Jan Nowak' },
        { orderId: '23456', deliveryDate: '2024.04.15', products: ['Ibuvit D 2000 j.m.90 Kapsulek', 'Solgar Kwas Foliowy 400 ug 100 szt.'], orderValue: '45,50', pickupDate: '20.04.2024', pickupPerson: 'Anna Kowalska' },
        { orderId: '34567', deliveryDate: '2024.05.05', products: ['C-Vitum 1000mg Oleofarm 30 szt.', 'Paracetamol Biofarm 500 mg 10 Tabletek'], orderValue: '60,75', pickupDate: '10.05.2024', pickupPerson: 'Jan Nowak' },
        { orderId: '45678', deliveryDate: '2024.05.08', products: ['Euthyrox N 150 mcg 40 Tabletek', 'Nurofen Forte 400 mg Tabletki 12 tabl.'], orderValue: '33,90', pickupDate: '13.05.2024', pickupPerson: 'Anna Kowalska' },
        { orderId: '56789', deliveryDate: '2024.05.09', products: ['C-Vitum 1000mg Oleofarm 30 szt.', 'Solgar Kwas Foliowy 400 ug 100 szt.'], orderValue: '40,20', pickupDate: '14.05.2024', pickupPerson: 'Jan Nowak' },
        { orderId: '67890', deliveryDate: '2024.05.10', products: ['HealthLabs Vitamin B Complex 60 szt.', 'Ibuprom MAX Sprint Kapsulki 40 kap'], orderValue: '55,30', pickupDate: '15.05.2024', pickupPerson: 'Anna Kowalska' },
        { orderId: '78901', deliveryDate: '2024.05.12', products: ['Solgar Kwas Foliowy 400 ug 100 szt.', 'Paracetamol Biofarm 500 mg 10 Tabletek'], orderValue: '22,50', pickupDate: '17.05.2024', pickupPerson: 'Jan Nowak' },
        { orderId: '89012', deliveryDate: '2024.05.14', products: ['Paracetamol Biofarm 500 mg 10 Tabletek', 'Ibuvit D 2000 j.m.90 Kapsulek'], orderValue: '18,75', pickupDate: '19.05.2024', pickupPerson: 'Anna Kowalska' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [filteredHistory, setFilteredHistory] = useState(deliveryHistory);

    useEffect(() => {
        const sortDeliveryHistory = (sortType, data) => {
            switch (sortType) {
                case 'orderAsc':
                    return [...data].sort((a, b) => a.orderId.localeCompare(b.orderId));
                case 'dateDesc':
                    return [...data].sort((a, b) => new Date(b.deliveryDate) - new Date(a.deliveryDate));
                default:
                    return data;
            }
        };

        let newFilteredHistory = deliveryHistory.filter(item =>
            item.orderId.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (!searchTerm) {
            newFilteredHistory = deliveryHistory;
        }

        if (sortBy) {
            newFilteredHistory = sortDeliveryHistory(sortBy, newFilteredHistory);
        }

        setFilteredHistory(newFilteredHistory);
    }, [searchTerm, sortBy, deliveryHistory]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <Container fluid className="zakladki">
            <Tab.Container defaultActiveKey="next-order">
                <Row>
                    <Col sm={12} md={3}>
                        <Nav variant="pills" className="flex-column mb-3">
                            <Nav.Item>
                                <Nav.Link eventKey="next-order">Najblizsze zamowienie</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="delivery-history">Historia dostaw</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={12} md={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="next-order">
                                <DeliveryCard
                                    orderId="67456"
                                    deliveryDate="23.04.2024"
                                    products={['Ibuprom MAX Sprint Kapsulki 40 kap', 'HealthLabs Vitamin B Complex 60 szt.']}
                                    orderValue="23,28"
                                    pickupDate="25.04.2024"
                                    pickupPerson="Jan Nowak"
                                />
                            </Tab.Pane>

                            <Tab.Pane eventKey="delivery-history">
                                <Row>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Historia dostaw</Card.Title>
                                                <Form.Group controlId="deliveryHistoryForm">
                                                    <Form.Label>Wyszukaj numer zamowienia</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Wprowadz numer zamowienia"
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Accordion defaultActiveKey="" className="mt-3">
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Sortuj</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Form className="text-center">
                                                                <Form.Check className="d-flex align-items-center">
                                                                    <Form.Check.Input
                                                                        type="radio"
                                                                        name="sortOrder"
                                                                        value="orderAsc"
                                                                        checked={sortBy === 'orderAsc'}
                                                                        onChange={handleSortChange}
                                                                        className="me-2"
                                                                    />
                                                                    <Form.Check.Label>Numer zamowienia - rosnaco</Form.Check.Label>
                                                                </Form.Check>
                                                                <Form.Check className="d-flex align-items-center">
                                                                    <Form.Check.Input
                                                                        type="radio"
                                                                        name="sortOrder"
                                                                        value="dateDesc"
                                                                        checked={sortBy === 'dateDesc'}
                                                                        onChange={handleSortChange}
                                                                        className="me-2"
                                                                    />
                                                                    <Form.Check.Label>Data - od najnowszego</Form.Check.Label>
                                                                </Form.Check>
                                                            </Form>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                                <Button className="mt-3 mb-3" variant="primary" type="submit">Szukaj</Button>
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Numer zamowienia</th>
                                                                <th>Data dostawy</th>
                                                                <th>Produkty</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {filteredHistory.map((delivery, index) => (
                                                                <tr key={index}>
                                                                    <td><Button variant='white'>{delivery.orderId}</Button></td>
                                                                    <td><Button variant='white'>{delivery.deliveryDate}</Button></td>
                                                                    <td><Button variant='white'>{delivery.products.join(', ')}</Button></td>
                                                                    <td><Button variant="link"><GoSearch /></Button></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <Pagination className="historiaZamowienStrony">
                                                    <Pagination.First />
                                                    <Pagination.Prev />
                                                    <Pagination.Item active>{1}</Pagination.Item>
                                                    <Pagination.Item>{2}</Pagination.Item>
                                                    <Pagination.Item>{3}</Pagination.Item>
                                                    <Pagination.Ellipsis />
                                                    <Pagination.Item>{7}</Pagination.Item>
                                                    <Pagination.Next />
                                                    <Pagination.Last />
                                                </Pagination>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default Zamowienia;

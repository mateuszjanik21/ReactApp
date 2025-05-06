import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';
import SearchAndSortForm from '../components/SearchAndSortForm';
import ProductCard from '../components/ProductCard';

export const Magazyn = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [filteredProducts, setFilteredProducts] = useState([]);

    const products = [
        { id: 1, name: 'Aspirin', type: 'Lek', quantity: 100, price: 20, expiration: '2024-12-31' },
        { id: 2, name: 'Apap', type: 'Lek', quantity: 50, price: 15, expiration: '2024-06-30' },
        { id: 3, name: 'Ambroxol', type: 'Syrop', quantity: 30, price: 25, expiration: '2023-11-30' },
        { id: 4, name: 'Kodeina', type: 'Lek', quantity: 20, price: 30, expiration: '2025-01-15' },
        { id: 5, name: 'Ibuprofen', type: 'Lek', quantity: 75, price: 10, expiration: '2024-09-15' },
        { id: 6, name: 'Paracetamol', type: 'Lek', quantity: 60, price: 18, expiration: '2024-08-01' },
        { id: 7, name: 'Guaifenesin', type: 'Syrop', quantity: 40, price: 22, expiration: '2023-12-25' },
        { id: 8, name: 'Dekstrometorfan', type: 'Syrop', quantity: 25, price: 20, expiration: '2025-02-20' },
    ];

    useEffect(() => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm, sortConfig]);

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    return (
        <Container className="mt-4">
            <h1 className="mb-4 text-center">Magazyn</h1>
            <Alert variant="info" className="text-center">
                Sprawdz dostepnosc naszych produktow i dodaj je do koszyka!
            </Alert>
            <Alert variant="secondary" className="text-center">
                Laczna liczba produktow w magazynie: {products.length}
            </Alert>
            <Alert variant="secondary" className="text-center">
                Liczba przefiltrowanych produktow: {filteredProducts.length}
            </Alert>
            <SearchAndSortForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSort={handleSort}
            />
            <Row className="g-4">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Row>
            <Pagination className="justify-content-center mt-4">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </Container>
    );
};

export default Magazyn;

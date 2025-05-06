import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Pagination from 'react-bootstrap/Pagination';
import ProductRow from '../components/ProductRow';
import SearchForm from '../components/SearchForm';
import AlertMessage from '../components/AlertMessage';

export const Szukaj = () => {
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [category, setCategory] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [filteredProducts, setFilteredProducts] = useState([]);

    const products = [
        { code: '001', name: 'Paracetamol', category: 'Tabletki', price: 20 },
        { code: '002', name: 'Ibuprofen', category: 'Tabletki', price: 15 },
        { code: '003', name: 'Ambroxol', category: 'Syropy', price: 25 },
        { code: '004', name: 'Cetirizine', category: 'Tabletki', price: 30 },
        { code: '005', name: 'Guaifenesin', category: 'Syropy', price: 18 },
        { code: '006', name: 'Dekstrometorfan', category: 'Syropy', price: 22 },
        { code: '007', name: 'Witamina C', category: 'Suplementy', price: 10 },
        { code: '008', name: 'Kodeina', category: 'Zastrzyki', price: 50 },
        { code: '009', name: 'Loratadine', category: 'Tabletki', price: 35 },
        { code: '010', name: 'Aspirin', category: 'Tabletki', price: 12 },
    ];

    const handleSearch = () => {
        setLoading(true);
        setTimeout(() => {
            const filtered = products.filter(product => {
                const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategory = category ? product.category === category : true;
                const matchesMinPrice = minPrice ? product.price >= parseFloat(minPrice) : true;
                const matchesMaxPrice = maxPrice ? product.price <= parseFloat(maxPrice) : true;
                return matchesSearchTerm && matchesCategory && matchesMinPrice && matchesMaxPrice;
            });

            setShowAlert(filtered.length === 0);
            setFilteredProducts(filtered);
            setLoading(false);
        }, 2000);
    };

    const handleClearFilters = () => {
        setSearchTerm('');
        setMinPrice('');
        setMaxPrice('');
        setCategory('');
        setFilteredProducts(products);
        setShowAlert(false);
    };

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
        <Container className="cont mt-4">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtrowanie listy</Accordion.Header>
                    <Accordion.Body>
                        <SearchForm
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                            category={category}
                            setCategory={setCategory}
                            handleSearch={handleSearch}
                            handleClearFilters={handleClearFilters}
                            loading={loading}
                        />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <AlertMessage showAlert={showAlert} />
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th onClick={() => handleSort('code')}>Kod</th>
                        <th onClick={() => handleSort('name')}>Nazwa</th>
                        <th onClick={() => handleSort('category')}>Kategoria</th>
                        <th onClick={() => handleSort('price')}>Cena</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts.map((product) => (
                        <ProductRow key={product.code} product={product} />
                    ))}
                </tbody>
            </Table>
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

export default Szukaj;

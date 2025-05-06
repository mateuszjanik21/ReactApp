import React from 'react';
import { Form, Row, Col, Button, InputGroup, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchForm = ({
    searchTerm, setSearchTerm,
    minPrice, setMinPrice,
    maxPrice, setMaxPrice,
    category, setCategory,
    handleSearch, handleClearFilters, loading
}) => {
    return (
        <Form>
            <Row>
                <Col sm={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Szukaj po nazwie</Form.Label>
                        <Form.Control
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Cena od</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>PLN</InputGroup.Text>
                            <Form.Control
                                type="number"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Cena do</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>PLN</InputGroup.Text>
                            <Form.Control
                                type="number"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Col>
                <Col sm={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Szukaj kategorii</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Wybierz</option>
                            <option value="Tabletki">Tabletki</option>
                            <option value="Syropy">Syropy</option>
                            <option value="Suplementy">Suplementy</option>
                            <option value="Zastrzyki">Zastrzyki</option>
                            <option value="Inne">Inne</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" onClick={handleSearch} disabled={loading} className="me-2">
                {loading ? (
                    <>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        /> Szukaj...
                    </>
                ) : (
                    'Szukaj'
                )}
            </Button>
            <Button variant="secondary" onClick={handleClearFilters}>
                Wyczysc filtry
            </Button>
        </Form>
    );
};

SearchForm.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    minPrice: PropTypes.string.isRequired,
    setMinPrice: PropTypes.func.isRequired,
    maxPrice: PropTypes.string.isRequired,
    setMaxPrice: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleClearFilters: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default SearchForm;

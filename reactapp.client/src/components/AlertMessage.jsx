import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AlertMessage = ({ showAlert }) => {
    return (
        <>
            {showAlert && (
                <Alert variant="info" className="mt-3">
                    Nie znaleziono wynikow dla podanych kryteriow.
                </Alert>
            )}
        </>
    );
};

AlertMessage.propTypes = {
    showAlert: PropTypes.bool.isRequired,
};

export default AlertMessage;

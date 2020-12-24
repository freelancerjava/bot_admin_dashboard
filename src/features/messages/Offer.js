import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { getMessagesTypeByGq } from "./query";
import SimpleListTable from '../../extrafunc/SimpleListTable'
// import PropTypes from 'prop-types';

export default function Offer() {
  return (
    <Container fluid className="mt--7">
      <Row>
        <Col>
          <SimpleListTable
          query_key={'complaint_orders'}
          query_fn={getMessagesTypeByGq}
          filter={{ type: 'offer' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

Offer.propTypes = {};
Offer.defaultProps = {};

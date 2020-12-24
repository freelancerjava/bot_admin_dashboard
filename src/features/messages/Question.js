import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { getMessagesTypeByGq } from "./query";
import SimpleListTable from '../../extrafunc/SimpleListTable'
// import PropTypes from 'prop-types';

export default function Question() {
  return (
    <Container fluid className="mt--7">
      <Row>
        <Col>
          <SimpleListTable
          query_key={'complaint_orders'}
          query_fn={getMessagesTypeByGq}
          filter={{ type: 'question' }}
          />
        </Col>
      </Row>
    </Container>
  );
};
Question.propTypes = {};
Question.defaultProps = {};

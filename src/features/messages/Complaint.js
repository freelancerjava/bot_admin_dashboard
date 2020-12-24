import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import { getMessagesTypeByGq } from "./query";
import SimpleListTable from '../../extrafunc/SimpleListTable'

export default function Complaint() {
  const orders_data = useQuery(["orders", {type:'complaint'}], getMessagesTypeByGq);
  return (
    <Container fluid className="mt--7">
      <Row>
        <Col>
          <SimpleListTable
          link={'/admin/messages/item'}
          query_key={'complaint_orders'}
          query_fn={getMessagesTypeByGq}
          filter={{ type: 'complaint' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

Complaint.propTypes = {};
Complaint.defaultProps = {};

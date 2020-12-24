import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import CardTitle from "reactstrap/lib/CardTitle";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import { useMutation } from 'react-query';
import { setChecked } from './query';
// import PropTypes from 'prop-types';

export default withRouter(function Message({ history }) {
  const id = history.location.pathname.split('item/')[1]

  const [mutCheck, mutCheckRes] = useMutation(setChecked)
  useEffect(() => {
    let cancel = false
    if(!cancel){
      mutCheck({id:id})
      cancel = true
    }
  }, [mutCheck, id])
  return (
    <Container fluid className="mt--7">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Item {id}</CardTitle>
            </CardHeader>
            <CardBody>
              Qale {id}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
})

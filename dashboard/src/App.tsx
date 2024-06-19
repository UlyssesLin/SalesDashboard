import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./styles.css"

import { mockAPICall } from "./store/actionCreators"
import { Dispatch } from "redux"

import { useEffect, useState, useCallback } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// import { DataTable } from 'primereact/datatable';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const payload: GenericObject = useSelector(
    (state: DashboardState) => state,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() : any => dispatch(mockAPICall()), [dispatch]);

  return (
    <>
      <header><img id="sl_logo" src="sl_logo.svg" alt="Company logo"/></header>
      <main>
        <Container id="cards_wrapper">
          <Row>
            {/* <Col xs={12} sm lg={4}> */}
            <Stack direction="horizontal" gap={3}>
            <Card className="card_area" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={payload.image} />
              <Card.Body>
                <Card.Title>{payload.title}</Card.Title>
                <Card.Text>{payload.subtitle}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {payload.tags.map((tag: string) => {
                  return <ListGroup.Item>{tag}</ListGroup.Item>
                })}
              </ListGroup>
              {payload.tags && payload.tags.map((tag: string) => {
                  <p>{tag}</p>
                })}
            </Card>
            {/* </Col> */}
            {/* <Col xs={12} sm lg={8}> */}
              <Stack gap={3}>
                <Card id="graph" className="card_area">GRAPH</Card>
                <Card id="table" className="card_area">TABLE</Card>
              </Stack>
            {/* </Col> */}
            </Stack>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default App

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

import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { Button } from 'primereact/button';


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
      <header><a href="https://www.stackline.com/"><img id="sl_logo" src="sl_logo.svg" alt="Company logo"/></a></header>
      <main>
        <Container fluid id="cards_wrapper">
          <Row>
            {/* <Stack direction="horizontal" gap={3}> */}
            <Col xs={12} sm lg={4} xl={2}>
            <Card id="product_info" className="card_area">
              <Card.Img variant="top" src={payload.image} />
              <Card.Body>
                <Card.Title>{payload.title}</Card.Title>
                <Card.Text>{payload.subtitle}</Card.Text>
                <div id="tags_area">
                  {payload?.tags.map((tag: string) => {
                    return <span className="tag">{tag}</span>
                  })}
                </div>
              </Card.Body>
            </Card>
            </Col>
            <Col xs={12} sm lg={8} xl={10}>
              <Stack gap={3}>
                <Card id="graph" className="card_area">GRAPH</Card>
                <Card id="table" className="card_area">
                <DataTable value={payload.sales} tableStyle={{ minWidth: '50rem' }}>
                  <Column field="weekEnding" header="WEEK ENDING" sortable style={{ width: '17%' }}></Column>
                  <Column field="retailSales" header="RETAIL SALES" sortable style={{ width: '20%' }}></Column>
                  <Column field="wholesaleSales" header="WHOLESALE SALES" sortable style={{ width: '20%' }}></Column>
                  <Column field="unitsSold" header="UNITS SOLD" sortable style={{ width: '20%' }}></Column>
                  <Column field="retailerMargin" header="RETAILER MARGIN" sortable style={{ width: '20%' }}></Column>
                </DataTable>
                </Card>
              </Stack>
            </Col>
            {/* </Stack> */}
          </Row>
        </Container>
      </main>
    </>
  )
}

export default App

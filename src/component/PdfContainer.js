import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'


export default (props) => {
    const bodyRef = React.createRef();
    const createPdf = () => { props.createPdf(bodyRef.current) };
    return (
        <Row className="pdf-container">
            <Col className="pdf-toolbar">
                <p className="col1_headeer">The QR file sent to your Email address</p>
                <br />
                <Button onClick={createPdf}>Click to Print</Button>
            </Col>
            <Col className="pdf-body" ref={bodyRef}>
                {props.children}
            </Col>
        </Row>
    )
}
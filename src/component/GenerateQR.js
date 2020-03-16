import React, { Component } from 'react'
// import { withRouter } from "react-router-dom"
import "../css/Inputpage.css"
import { Container, Row, Col } from 'react-bootstrap'
import '../css/QR_generator.css'
import Button from '@material-ui/core/Button'

import QRCode from 'qrcode.react'

class QR_generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: "{" + "\"email\":\"" + localStorage.getItem('Email') + "\",\"StoreName\":\"" + localStorage.getItem('StoreName') +
                "\",\"StoreLocation\":\"" + localStorage.getItem('StoreLocation') + "\",\"Location\":\"" + localStorage.getItem('Location') + "\"}"
        }
        // jsonData: 'Email=' + localStorage.getItem('Email') + '&' + 'StoreName=' + localStorage.getItem('StoreName')
    }

    render() {
        console.log(this.state.jsonData)
        return (
            <div className="QR_generator">
                <Container>
                    <Row>
                        <Col>
                            <p>The QR file sent to your Email address</p>
                            <button>Click to Print</button>
                        </Col>
                        <Col xs={5} className="QR_area">
                            <p>The Place name:</p>
                            {/* <br /> */}
                            <p>{localStorage.getItem('StoreName')}</p>
                            <QRCode style={{ width: '70%', height: "auto" }} value={this.state.jsonData} />
                            <p>UNIQUE ID:</p>
                        </Col>
                        <Col className="QR_button">
                            <button className="generate" onClick={this.Generate_data}>Generate new QR</button>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default QR_generator
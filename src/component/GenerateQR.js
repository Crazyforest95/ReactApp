import React, { Component } from 'react'
import { render } from 'react-dom';
// import { withRouter } from "react-router-dom"
import "../css/Inputpage.css"
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../css/QR_generator.css'
// import Button from '@material-ui/core/Button'
import shortid from 'shortid'
import QRCode from 'qrcode.react'

import Doc from './DocService'
import PdfContainer from './PdfContainer'


const textToPicture = require('text-to-picture')

var fs = require('fs');
var text2png = require('text2png');

class QR_generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str: '',
            key: '',
            jsonData: "{" + "\"email\":\"" + localStorage.getItem('Email') + "\",\"StoreName\":\"" + localStorage.getItem('StoreName') +
                "\",\"StoreLocation\":\"" + localStorage.getItem('StoreLocation') + "\",\"Location\":\"" + localStorage.getItem('Location') + "\"}"
        }
        this.Generate_data = this.Generate_data.bind(this)
    }

    Generate_data() {
        // var result = textToPicture.convert({
        //     text: localStorage.getItem('StoreName')
        // })
        // console.log("logo: ", result)
        this.setState({
            // str: result.getBase64(),
            key: shortid.generate()
        })

        // textToPicture.convert({
        //     text: 'LS'
        //   }).then(result => {
        //     return result.getBase64()
        //   }).then(str => {
        //     console.log("str: ",str) // data:image/png;base64,iVBORw0KGgoA...
        //   }).catch(err => console.log(err))
        // fs.writeFileSync('out.png', text2png('Hello!', {color: 'blue'}));
        // console.log(text2png('Hello!', {color: 'blue'}))
    }
    createPdf = (html) => Doc.createPdf(html);

    render() {
        return (
            <div className="QR_generator">
                <Container>
                    <Row>
                        <Col sm={8}>
                            {/* <Col>
                            <p className="col1_headeer">The QR file sent to your Email address</p>
                            <Button>Click to Print</Button>
                        </Col> */}
                            <PdfContainer createPdf={this.createPdf}>
                                {/* <Col xs={5} className="QR_area"> */}
                                <p>The Place name:</p>
                                {/* <br /> */}
                                <p>{localStorage.getItem('StoreName')}</p>
                                <QRCode style={{ width: '70%', height: "auto" }} value={this.state.jsonData} logo={this.state.str} />
                                {/* logoImage={this.state.str} */}
                                <p className="uniqueID"> UNIQUE ID: {this.state.key}</p>
                                {/* </Col> */}
                            </PdfContainer>
                        </Col>
                        <Col sm={4} className="QR_button">
                            <Button className="generate" onClick={this.Generate_data}>Generate new QR</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default QR_generator
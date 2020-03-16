import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Form, Col, Button } from 'react-bootstrap'
import "../css/Inputpage.css"
import Map from "./Map"


class Inputpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            StoreName: '',
            StoreLocation: '',
            Location: 'Israel',
            validated: false,
            message: '',
            b_message: false,
            center: {
                lat: 31.0461,
                lng: 34.8516,
            },
            zoom: 11

        }
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeStoreName = this.onChangeStoreName.bind(this)
        this.onChangeStoreLocation = this.onChangeStoreLocation.bind(this)
        this.onChangeLocation = this.onChangeLocation.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onChangeEmail(e) {
        this.setState({ Email: e.target.value, b_message: false })
    }

    onChangeStoreName(e) {
        this.setState({ StoreName: e.target.value, b_message: false })
    }

    onChangeStoreLocation(e) {
        this.setState({ StoreLocation: e.target.value, b_message: false })
    }

    async onChangeLocation(e) {
        await this.setState({ Location: e.target.value, b_message: false })
    }

    async handleSubmit(event) {
        const form = event.currentTarget
        if (form.checkValidity() === true) {
            event.preventDefault()
            this.props.history.push('/secondPage')
            window.location.reload(false)
        }
        await this.setState({ validated: true })
        localStorage.setItem('Email', this.state.Email)
        localStorage.setItem('StoreName', this.state.StoreName)
        localStorage.setItem('StoreLocation', this.state.StoreLocation)
        localStorage.setItem('Location', this.state.Location)
    }

    render() {

        console.log(this.state.Location)
        return (
            
            <div className="Inputpage containerwidth" display={this.state.display}>
                <div className="input_header">
                    <h4>Have Place? Please read this information:</h4>
                </div>
                {/* <Alert severity="error" className={this.state.b_message === true ? "errorMessage_show" : "errorMessage_hide"}>{this.state.message}</Alert> */}
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group as={Col} controlId="validationCustom01" className="input_area">
                        <Form.Label >Your email address:</Form.Label>
                        <Form.Control required onChange={this.onChangeEmail} className="input_field" />
                        {/* type="email" */}
                    </Form.Group>
                    <Form.Group className="passwordgroup" as={Col} controlId="validationCustom02" className="input_area">
                        <Form.Label>Please insert the name of the store:</Form.Label>
                        <Form.Control required onChange={this.onChangeStoreName} className="input_field" />
                    </Form.Group>
                    <Form.Group className="passwordgroup" as={Col} controlId="validationCustom03" className="input_area">
                        <Form.Label>Please insert the location of the store:</Form.Label>
                        <Form.Control required onChange={this.onChangeStoreLocation} className="input_field" />
                    </Form.Group>
                    <Form.Label>Please click on the exact address:</Form.Label>

                    {/* <Form.Group className="passwordgroup" as={Col} controlId="validationCustom04" className="input_area">
                        <Form.Label>Please click on the exact address:</Form.Label>
                        <Form.Control required onChange={this.onChangeLocation} className="input_field" />
                    </Form.Group> */}
                    <div className='googlemap'>
                        <Map
                            google={this.props.google}
                            // center={{ lat: 18.5204, lng: 73.8567 }}
                            height='300px'
                            zoom={15}
                            center={this.state.center}
                            Location={this.state.Location}
                        />
                    </div>
                    <Button variant="primary" type="submit" className="Create_Button">Create QR code</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(Inputpage)
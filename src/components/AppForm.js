import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
const logo = require('../images/sendMail.svg');


const AppForm = (props) => {
    return (
        <Form>
            <Row form>
                <Col>
                    <FormGroup>
                        <Input className="formInput" placeholder="Name" />
                    </FormGroup>
                    <FormGroup>
                        <Input className="formInput" type="email" name="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Input className="formInput" placeholder="Message" />
                    </FormGroup>
                </Col>
            </Row>
            <Button className="sendMailButton">
                <img src={logo} width="50px" height="50px"></img>
            </Button>
        </Form>
    );
}

export default AppForm;
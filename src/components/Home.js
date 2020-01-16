import React, { Component } from 'react'
import {Jumbotron, Row, Col, Image, Button, Card} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h2>Welcome to Home</h2>
                    <p>This is how to build a website with react, react router and react bootstrap</p>
                    <Button color="primary">primary</Button>
                </Jumbotron>

                <Row className="show-grid text-center" margin-left="20px">
                    <Col xs={12} sm={4} className="tile-wrapper">
                    <Card bg="dark" text="white" >
                        <Card.Header>Step 1</Card.Header>
                        <Card.Body>
                            <Card.Title>REDUCE</Card.Title>
                            <Image src="assets/pic1.jpg"  className="tile-pic rounded-circle"/>
                            <Card.Text>
                                The concept of reducing what is produced and what is consumed is essential to the waste hierarchy. The logic behind it is simple to understand – if there is less waste, then there is less to recycle or reuse.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col> 

                    <Col xs={12} sm={4} className="tile-wrapper">
                    <Card bg="dark" text="white" >
                        <Card.Header>Step 2</Card.Header>
                        <Card.Body>
                            <Card.Title>REDUCE</Card.Title>
                            <Image src="assets/pic2.jpg"  className="tile-pic rounded-circle"/>
                            <Card.Text>
                            You may have a box of things you keep that are broken or that you don’t have a use for that you hang on to in-case you find another use for them; or you may find bargains on old furniture or go trash picking and get </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col> 

                    <Col xs={12} sm={4} className="tile-wrapper">
                    <Card bg="dark" text="white">
                        <Card.Header>Step 2</Card.Header>
                        <Card.Body>
                            <Card.Title>REDUCE</Card.Title>
                            <Image src="assets/pic3.jpg"  className="tile-pic rounded-circle"/>
                            <Card.Text>
                            The last stage of the waste hierarchy is to recycle. To recycle something means that it will be transformed again into a raw material that can be shaped into a new item. There are very few materials on the earth that cannot be recycled.                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col> 
                    {/* <Col xs={12} sm={4} className="tile-wrapper">
                        <Image src="assets/pic2.jpg"  className="tile-pic rounded-circle"/>
                        <h3>REUSE</h3>
                        <p></p>
                    </Col> 
                    <Col xs={12} sm={4} className="tile-wrapper">
                        <Image src="assets/pic3.jpg"  className="tile-pic rounded-circle"/>
                        <h3>RECYCLE</h3>
                        <p></p>
                    </Col>  */}
                </Row>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Jumbotron, Row, Col, Image, Button, Card} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="container-fluid padding">
                        <div className="row padding">
                            <div className="col-md-12 col-lg-8">
                                <h2>How you can save the planet</h2>
                                <p>The simple answer: We aim to send nothing to a landfill. We reduce what we need, reuse as much as we can, send little to be recycled, and compost what we cannot. </p>
                                <p>The less simple answer: It's really about redefining the system. We currently live in a linear economy where we take resources from the earth and then dump them in a giant hole in the ground. The goal of zero waste is to move to a circular economy where we write trash out of existence. The circular economy mimics nature in that there is no trash in nature.
                                Instead of discarding resources, we create a system where all resources can be resumed fully back into the system.</p>
                            </div>
                            <div className="col-lg-4">
                                <img className="articleImg" src="assets/article.jpg"/>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <hr></hr>
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
                            <Card.Title>REDUSE</Card.Title>
                            <Image src="assets/pic2.jpg"  className="tile-pic rounded-circle"/>
                            <Card.Text>
                            You may have a box of things you keep that are broken or that you don’t have a use for that you hang on to in-case you find another use for them; or you may find bargains on old furniture or go trash picking and get </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col> 

                    <Col xs={12} sm={4} className="tile-wrapper">
                    <Card bg="dark" text="white">
                        <Card.Header>Step 3</Card.Header>
                        <Card.Body>
                            <Card.Title>RECYCLE</Card.Title>
                            <Image src="assets/pic3.jpg"  className="tile-pic rounded-circle"/>
                            <Card.Text>
                            The last stage of the waste hierarchy is to recycle. To recycle something means that it will be transformed again into a raw material that can be shaped into a new item. There are very few materials on the earth.                        </Card.Text>
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

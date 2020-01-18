import React, { Component } from 'react'
import {Jumbotron, Row, Col, Image, Button, Card} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h2>How you can save the planet</h2>
                    <p>Imagine 15 grocery bags filled with plastic trash piled up on every single yard of shoreline in the world. That’s how much land-based plastic trash ended up in the world’s oceans in just one year. The world generates at least 3.5 million tons of plastic and other solid waste a day, 10 times the amount a century ago, according to World Bank researchers. The U.S. is the king of trash, producing a world-leading 250 million tons a year—roughly 4.4 pounds of trash per person per day.</p>
                    <Button color="primary">Know more</Button>
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

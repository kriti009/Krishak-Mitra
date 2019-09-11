import React from "react";
import { Container, Row, Col,ListGroupItemHeading, Card,h6, CardHeader, ListGroup,
    ListGroupItem,CardBody, Button } from "shards-react";
import { element } from "prop-types";
import dateFormat from 'dateformat';

class ComplaintDetails extends React.Component {
    constructor(props){
        super(props);   
    }

    render() {
        // console.log(this.props.data);
        var display = this.props.hidden ? "d-none" : "d-block";
        var orderDetailStyle = {
            height: "400px",
            width: "100%",
            marginTop :"20px",
            marginBottom: "20px",
          };
        return (
            <ListGroup flush >
                
                
                <ListGroupItem className="p-4">
                    <ListGroupItemHeading><u>Complaint Details:</u></ListGroupItemHeading>
                    <Row>
                        <Col>
                            <strong className="text-muted d-block mb-2">
                                    Complaint Id
                            </strong>
                            <b><span style={{color: 'black'}}>{this.props.data._id}</span></b>
                        </Col>
                        <Col>
                            <strong className="text-muted d-block mb-2">
                                Complaint Status
                            </strong>
                            <b><span style={{color: 'black'}}>{this.props.data.status}</span></b>
                        </Col>
                        <Col>
                            <strong className="text-muted d-block mb-2">
                                Employee Assigned
                            </strong>
                            <b><span style={{color: 'black'}}>{this.props.data.emp}</span></b>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                    <Col>
                            <strong className="text-muted d-block mb-2">
                                Issue
                            </strong>
                            <b><span style={{color: 'black'}}>{this.props.data.context}</span></b>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem className="p-4">
                    <ListGroupItemHeading><u>Complainer Details:</u></ListGroupItemHeading>
                    <Row>
                        <Col>
                            <strong className="text-muted d-block mb-2">
                                    Complainer Id
                            </strong>
                            <b><span style={{color: 'black'}}>{this.props.data.complainant}</span></b>
                        </Col>
                        <Col>
                            <strong className="text-muted d-block mb-2">
                                Role
                            </strong>
                            <b><span style={{color: 'black'}}>{this.props.data.complainer}</span></b>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem className="p-4">
                    <ListGroupItemHeading><u>Responder Details:</u></ListGroupItemHeading>
                    <Row>
                        <Col>
                            <strong className="text-muted d-block mb-2">
                                    Responder Id
                            </strong>
                            <b><span style={{color: 'black'}}>{this.props.data.respondent}</span></b>
                        </Col>
                        <Col>
                            <strong className="text-muted d-block mb-2">
                                Role
                            </strong>
                            <b><span style={{color: 'black'}}>{this.props.data.responder}</span></b>
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
        )
    }
}
export default ComplaintDetails 
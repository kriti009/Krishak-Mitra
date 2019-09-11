import React from "react";
import { Container, Row, Col,ListGroupItemHeading, Card, CardHeader, ListGroup,
    ListGroupItem,CardBody, Button } from "shards-react";
import ComplaintDetails from "./ComplaintDetails";
import ChangeStatus from "./ChangeStatus";
// import AuditTrail from "./AuditTrail";
    
class DetailsNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            complaintDetail : true,
            statuschange :false,
            
        }
        this.handleComplaintDetails = this.handleComplaintDetails.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
    }
    
    handleStatus=()=>{
        this.setState({
            statuschange :true,
            complaintDetail: false
        })
    }
    handleComplaintDetails=()=>{
        this.setState({
            statuschange :false,
            complaintDetail: true
        })
    }
    render(){
        // console.log(this.props.data);
        var orderDetailStyle = {
            
            width: "100%",
            marginTop :"20px",
            marginBottom: "60px",
        };
        return (
            <Card className= "orderDetailContainer" style={orderDetailStyle}>
                <div className="border-bottom">
                    <Button className="mt-3 mb-3 mr-3 ml-3 " onClick={this.handleComplaintDetails}><i class="fas fa-list-alt"></i> Complaint Deatils</Button>
                    <Button className="mt-3 mb-3 mr-3  " onClick={this.handleStatus}><i class="fas fa-pencil-alt"></i> Change Status</Button>
                    
                    <Button outline className=" btn-outline float-right mt-3 mr-3" onClick={this.props.handleHide}><i className="fa fa-times"></i></Button>
                </div>
                {this.state.complaintDetail && <ComplaintDetails data={this.props.data}/>}
                {this.state.statuschange && <ChangeStatus handleStatus={this.props.handleStatus}/>}
                {/* {this.state.auditTrail && <AuditTrail data={this.props.data}/>} */}
            </Card>
        )
    }
}
export default DetailsNav 
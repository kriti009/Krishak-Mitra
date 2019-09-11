import React from "react";
import { Container, Row, Col,ListGroupItemHeading,FormSelect,Form,FormGroup, Card, CardHeader, ListGroup,
    ListGroupItem,CardBody, Button } from "shards-react";
    
class ChangeStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value1 : "status",
            value2 : "",
            employee : [],
        };
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleKeyChange=(e)=>{
        this.setState({value1: e.target.value});
    }
    handleValueChange=(e)=>{
        this.setState({value2: e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(this.state.value1);
        // console.log(this.state.value2);
        this.props.handleStatus(this.state.value1, this.state.value2);
    }
    
    render(){
        const status = ["In-Queue","Processing", "Resolved"];
        const employee = ["Kriti", "Nandini", "Akanksha"];
        var option;
        if(this.state.value1 == "status")
        {
            option = status.map((h,i) => (
            <option value={h} key={i}>{h}</option>
            ))
        }else{
            option = employee.map((h,i) => (
                <option value={h} key={i}>{h}</option>
            ))
        }
        return (
            <Form className="w-50 mt-3 ml-3 pb-5" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <FormSelect className="mt-3" onChange={this.handleKeyChange} value={this.state.value1}>
                        <option value="status">Change Status</option>
                        <option value="employee">Assign Employee</option>
                    </FormSelect>
                </FormGroup>
                <FormGroup >
                    <FormSelect className="" onChange={this.handleValueChange} value={this.state.value2}>
                        <option value="">---------</option>
                        {option}
                    </FormSelect>
                </FormGroup>
                <FormGroup>
                    <Button className="mt-1 w-50 float-right">Submit</Button>
                </FormGroup>
                
            </Form>
        );
    }
}
export default ChangeStatus 
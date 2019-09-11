import React from "react";
import { Container, Row, Col,ListGroupItemHeading, Card, CardHeader, ListGroup,
  ListGroupItem,CardBody, Button } from "shards-react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import DetailsNav from "../components/common/DetailsNav";

import PageTitle from "../components/common/PageTitle";

class Tables extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Complaint Id", field: "_id", filter: true, sortable: true
        },{
          headerName: "Category", field: "category", filter: true, sortable: true
        },{
          headerName: "Status", field: "status", filter: true, sortable: true
        },{
          headerName: "Employee Assigned", field: "emp", filter: true, sortable: true
        }
      ],
      hidden : true,
      sentComplaintDetails: {},
      getRowNodeId : function(data) {
        return data._id;
      },
    };
    this.handleComplaintDetails = this.handleComplaintDetails.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
  }
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  };
  handleComplaintDetails = () =>{
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows[0]);
    this.setState({hidden : false,sentComplaintDetails: selectedRows[0]});
    
    // console.log(this.state.hidden);
  };
  handleHide = ()=>{
    this.setState({hidden : true});
  }
  handleStatus = (key ,value) =>{
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(key+" "+value);
    var rowNode = this.gridApi.getRowNode(selectedRows[0]._id);
    var data;
    if(key=="status"){
      data = {
        status: value,
        _id : selectedRows[0]._id,
      }
        fetch('http://localhost:8000/complaint', {
        method: 'PUT', // or 'PUT'
        dataType: 'json',
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => {
        // console.log('Success:', JSON.stringify(response));
        rowNode.setDataValue('status', value);
        // selectedRows[0].audit = response.audit;
        this.setState({sentOrderDetails: selectedRows[0]});
        
      })
      .catch(error => console.error('Error:', error)); 
    }else{
      data = {
        emp : value,
        _id : selectedRows[0]._id,
      }
      fetch('http://localhost:8000/assign_emp', {
        method: 'PUT', // or 'PUT'
        dataType: 'json',
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => {
        // console.log('Success:', JSON.stringify(response));
        rowNode.setDataValue('emp', value);
        // selectedRows[0].audit = response.audit;
        this.setState({sentOrderDetails: selectedRows[0]});
        
      })
      .catch(error => {
        console.error('Error:', error);
        this.props.history.push('/errors');
      }); 
    }
  }
  componentDidMount() {
    fetch('http://localhost:8000/complaint',{
      method: 'GET',
      dataType: 'json',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(result => result.json())
    .then(rowData =>{
      // console.log(rowData);
      // if(rowData.success)
        this.setState({rowData});
    })
    .catch(()=>{
      this.props.history.push('/errors');
    })
    
  };
  render () {
    var tableStyle = {
      height: '300px', 
      width: '100%'
    };
    return (
      <Container fluid className="main-content-container px-4 " >
        <Row noGutters className="page-header py-4">
           <PageTitle sm="4" title="Complaint List" subtitle="Netfarm" className="text-sm-left" />
        </Row>
        <div className="ag-theme-balham" style={tableStyle} >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowSelection='single'
            // floatingFilter={true}
            frameworkComponents={this.state.frameworkComponents}
            animateRows={true}
            rowData={this.state.rowData}
            onRowDoubleClicked = {this.handleComplaintDetails}
            getRowNodeId={this.state.getRowNodeId}
            enableCellChangeFlash={true}
            suppressAggFuncInHeader={true}
            onGridReady={this.onGridReady}
            >
          </AgGridReact>
        </div>
        {!this.state.hidden && <DetailsNav data={this.state.sentComplaintDetails} handleStatus={this.handleStatus} handleHide={this.handleHide} hidden={this.state.hidden} />}
      </Container>
    )
  }
}

export default Tables;
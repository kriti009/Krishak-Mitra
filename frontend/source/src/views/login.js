import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
  
} from "shards-react";
// import AuthHelperMethods from "../components/AuthHelper/AuthHelperMethods";



class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : "",
      password : "",
      phone_no :"",
      crop_grown : [],
      submitted : false,
      loading: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmit.setTimeout = this.handleSubmit.setTimeout.bind(this);
  }
//   Auth = new AuthHelperMethods ; 
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit= (e) =>{
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    localStorage.setItem("name", this.state.name);
    // this.props.history.push("/blog-posts");
    // if(username && password) {
    // //   const data = {
    // //     username : username,
    // //     password: password
    // //   };
    //   console.log(this.state);
      
    // //   this.Auth.login(username, password);
    //   // console.log(this.Auth.getToken());
    //   this.setState({loading: true});
      setTimeout(function () {
        // console.log(this.Auth.getToken());
         this.props.history.push("/blog-posts");
      }.bind(this), 2000)
    // }
  }
    // componentDidMount=()=>{
    //   if(this.Auth.loggedIn())
    //     this.props.history.replace("/");
    // }

  render(){
    return (
      <Card small className="mb-4 w-25 h-50 mt-5 mx-auto ">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Login</h6>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form onSubmit={this.handleSubmit}>
                  <Row form>
                    {/* First Name */}
                    <Col md="12" className="form-group">
                      <label htmlFor="feFirstName"> Name</label>
                      <FormInput
                        id="name"
                        placeholder="Your Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                  <Row form>
                    {/* Password */}
                    <Col md="12" className="form-group">
                      <label htmlFor="fePassword">Password</label>
                      <FormInput
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        autoComplete="current-password"
                      />
                    </Col>
                  </Row>
                  <Row form>
                    {/* Password */}
                    <Col md="12" className="form-group">
                      <label htmlFor="fePassword">Phone No.</label>
                      <FormInput
                        id="phone_no"
                        placeholder="+91 81456413xxxx"
                        value={this.state.phone_no}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                  
                  {!this.state.loading && <Button theme="accent  ml-4 mb-3 mt-3 w-75"  >LOGIN</Button>}
                  {this.state.loading && <span className=' mt-5'><i class="fas fa-spinner fa-spin"> </i> LOADING</span>}
                </Form>
                <a href="#" className="p-4">Already have an account ?</a>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
};


export default Login;

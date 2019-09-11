import React from "react";
import ReactQuill from "react-quill";
//import { Card, CardBody, Form, FormInput } from "shards-react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="h-100">
    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form">
        {/* Title */}
        <FormGroup>
          <FormInput placeholder="Crop Name" />
        </FormGroup>

        {/* Body */}
        <FormGroup>
          <FormTextarea placeholder="Description" />
        </FormGroup>
        <div className="custom-file mb-3">
     <input type="file" className="custom-file-input" id="customFile2" />
    <label className="custom-file-label" htmlFor="customFile2">
      Choose Image
    </label> 
  </div>        {/* Create Draft */}
        <FormGroup className="mb-0">
          <Button theme="accent" type="submit">
            Post
          </Button>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
  // <Card small className="mb-3 ">
  //   <CardBody>
  //     <Form className="add-new-post">
  //       <FormInput size="lg" className="mb-3" placeholder="Crop Name " />
        
  //       <FormGroup  >
  //         <FormTextarea  placeholder="Description" />
  //       </FormGroup>


  //       {/* <ReactQuill className="add-new-post__editor mb-1" /> */}
  //     </Form>
  //   </CardBody>
  // </Card>
);

export default Editor;

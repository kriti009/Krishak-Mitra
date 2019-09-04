import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";

const CompleteFormExample = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Username</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Username"
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Farmer or Supplier</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="who are you?"
                />
              </Col>
            </Row>

            <FormGroup>
              <label htmlFor="feInputAddress">Issue</label>
              <FormInput id="feInputAddress" placeholder="How can we help you?" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="feInputAddress2">Phone Number</label>
              <FormInput
                id="feInputAddress2"
                placeholder=""
              />
            </FormGroup>
{/* 
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">City</label>
                <FormInput id="feInputCity" />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputState">State</label>
                <FormSelect id="feInputState">
                  <option>Choose...</option>
                  <option>...</option>
                </FormSelect>
              </Col>
              <Col md="2" className="form-group">
                <label htmlFor="feInputZip">Zip</label>
                <FormInput id="feInputZip" />
              </Col>
              <Col md="12" className="form-group">
                <FormCheckbox>
                  {}I agree with your{" "}
                  <a href="#">Privacy Policy</a>.
                </FormCheckbox>
              </Col>
            </Row> */}
            <Button type="submit">Send</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default CompleteFormExample;

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
  Button
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">नाम </label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    value="गंगा"
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">उपनाम </label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value="देवी"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">यूजरनाम </label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Username"
                    value="ganga"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">पासवर्ड </label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value="*********"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">पता</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value="शंकर नगर "
                  onChange={() => {}}
                />
              </FormGroup>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">शहर </label>
                  <FormInput
                    id="feCity"
                    placeholder="रायपुर "
                    onChange={() => {}}
                  />
                </Col>
                {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">राज्य</label>
                  <FormSelect id="feInputState">
                    <option>छत्तीसगढ़ </option>
                    <option>मध्य प्रदेश   </option>
                  </FormSelect>
                </Col>
                {/* Zip Code */}
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">पिन कोड </label>
                  <FormInput
                    id="feZipCode"
                    placeholder="492001"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">विवरण  </label>
                  <FormTextarea id="feDescription" rows="5" placeholder="गेहूँ, चावल" />
                </Col>
              </Row>
              <Button theme="accent">सेव करें </Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "जानकारी "
};

export default UserAccountDetails;

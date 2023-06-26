import React, { useState } from "react";
import { Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import "./Mycontact.css";
import { IconName } from "react-icons/bs";
import ContactInfo from "./ContactInfo";
import ContactUs from "./ContactUs";

function MyContact() {
  const [user, setUser] = useState({});
  const submitForm = (formInput) => {
    setUser(formInput);
  };
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <ContactInfo submitForm={submitForm} />
          <ContactUs user={user} />
        </Row>
      </Container>
    </div>
  );
}

export default MyContact;

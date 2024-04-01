import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { doctorData } from "../helpers/data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = () => {
  // console.log(doctorData)
  const [showModal, setShow] = useState(false);
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {/* {doctorData.map((doctor) => {
          const { id, img, name, dep } = doctor;
          return (
            <Col key={id}>
              <Image src={img} alt={name} />
            </Col>
          );
        })} */}
        {doctorData.map(({ id, img, name, dep }) => (
          <Col xs={6} sm={4} lg={3} key={id}>
            <Image className="img-thumbnail doctor-img w-100" src={img} alt={name} onClick={() => setShow(true)}/>
            <h5>{name}</h5>
            <p>{dep}</p>
          </Col>
        ))}
      </Row>
      <AddModal showModal={showModal} handleClose={()=>setShow(false)}/>
    </Container>
  );
};

export default Doctors;
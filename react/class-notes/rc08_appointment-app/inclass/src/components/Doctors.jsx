import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { doctorData } from "../helpers/data";
import AddModal from "./AddModal";

const Doctors = ({ apps, setApps }) => {
  // console.log(doctorData)
  const [showModal, setShow] = useState(false);
  const [drName, setDrName] = useState("");
  // const handleClose = () => setShow(false);
  const addAppointment = (newAppo) => {
    setApps([...apps, newAppo]);

    //* localStorage setItem() getItem() remove() clear()
    //* localStorage striinge olarak verileri kaydeder

    localStorage.setItem("appointments", JSON.stringify([...apps, newAppo]))

  };
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
            <Image
              className="img-thumbnail doctor-img w-100"
              src={img}
              alt={name}
              onClick={() => {
                setShow(true);//!modalı açacak olan statei güncelledik.
                setDrName(name); //* Tıklanılan doktorun adını yakaladık ki appointment oluştururken hangi doktora ekleyebileceğimizi tespit edelim.
              }}
            />
            <h5>{name}</h5>
            <p>{dep}</p>
          </Col>
        ))}
      </Row>
      <AddModal
        showModal={showModal}
        handleClose={() => setShow(false)}
        drName={drName}
        addAppointment={addAppointment}
      />
    </Container>
  );
};

export default Doctors;

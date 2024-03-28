import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container className='text-center mt-5'>
      <Image src={logo} width="200px" /><br />
      <h1 className="my-2 title">FOOTBALL LEGENDS</h1>
    </Container>
  );
};

export default Header;



      
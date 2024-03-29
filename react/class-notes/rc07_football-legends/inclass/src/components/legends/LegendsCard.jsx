import {useState} from "react"
import { Col, Container, Row } from "react-bootstrap"; 
import Card from "react-bootstrap/Card";
const LegendCard = ({legend}) => {
    const [show,setShow] = useState(false);
    // console.log(show)
    // console.log(legend);
    return   <Col>
      <Card className="player-card" role="button" onClick={() => setShow(!show)}>
        {!show ? (
          <Card.Img
            // onClick={() => setShow(!show)}
            variant="top"
            src={legend.img}
            title={legend.name}
            alt={legend.name}
          />
        ) : (
          <>
            {/* <Fragment key=> Fragmentin avantajı key propunu alabilmesi ama boş brakırsak yazamayız */}
            <Card.Header>
              <Card.Title>{legend.name}</Card.Title>
            </Card.Header>
            <ul className="m-auto">
              {legend.statistics.map((item) => (
                <li className="list-unstyled h5 text-start">
                  {" "}
                  ⚽ {item}
                </li>
              ))}
            </ul>
            <span>{legend.official_career}</span>
          </>
        )}
      </Card>
    </Col>
}

export default LegendCard

//! Propsu yorumdaki yöntemlerle gönderirsek aşağıdaki şekilde karşılama yapabiliriz.
// import {useState} from "react"
// import { Col, Container, Row } from "react-bootstrap"; 
// import Card from "react-bootstrap/Card";
// const LegendCard = ({img,statistics,name,official_career}) => {
//     const [show,setShow] = useState(false);
//     return   <Col>
//       <Card onClick={() => setShow(!show)}>
//         {!show ? (
//           <Card.Img
//             // onClick={() => setShow(!show)}
//             variant="top"
//             src={img}
//           />
//         ) : (
//           <>
//             {/* <Fragment key=> Fragmentin avantajı key propunu alabilmesi ama boş brakırsak yazamayız */}
//             <Card.Header>
//               <Card.Title>{name}</Card.Title>
//             </Card.Header>
//             <ul className="m-auto">
//               {statistics.map((item) => (
//                 <li className="list-unstyled h5 text-start">
//                   {" "}
//                   ⚽ {item}
//                 </li>
//               ))}
//             </ul>
//             <span>{official_career}</span>
//           </>
//         )}
//       </Card>
//     </Col>
// }

// export default LegendCard
import { Col, Container, Row } from "react-bootstrap"; //!yazım olarak daha kullanışlı ama performans açısından üstteki yöntem daha ideal
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import { useState } from "react";

const LegendContainer = () => {
	const [show, setShow] = useState(false);
	console.log(data);
	return (
		<div>
			<Form.Control type="search" placeholder="Search legends..." />
			<Container>
				<Row xs={1} md={2} lg={3}>
					{data.map((legend) => (
						// <Col xs={10} sm={8} md={6} lg={4} xl={3}>
						<Col>
							<Card onClick={() => setShow(!show)}>
								{!show ? (
									<Card.Img  variant="top" src={legend.img} />
								) : (
									<>
                                        {/*<Fragment key=>  fragmentin avantaji key probunu alabiilr */}
										<Card.Header>
											<Card.Title>
												{legend.name}
											</Card.Title>
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
					))}
				</Row>
			</Container>
		</div>
	);
};

export default LegendContainer;

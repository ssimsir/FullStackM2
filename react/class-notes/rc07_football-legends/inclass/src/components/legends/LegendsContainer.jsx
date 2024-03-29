import {Container, Row } from "react-bootstrap"; //!yazım olarak daha kullanışlı ama performans açısından üstteki yöntem daha ideal
import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import LegendsCard from "./LegendsCard";
import { useState } from "react";

const LegendContainer = () => {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value) //setter metodu her zaman asenkron çalışır
        console.log(search)

    }

    const filteredData = data.filter(item => item.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))

	return (
		<div>
			<Form.Control type="search" placeholder="Search legends..." onChange={handleChange} />
			<Container>
				<Row xs={1} md={2} lg={3}>
					{filteredData.map((legend) => (
						// <Col xs={10} sm={8} md={6} lg={4} xl={3}>

                        <LegendsCard key={legend.id} legend = {legend}/>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default LegendContainer;

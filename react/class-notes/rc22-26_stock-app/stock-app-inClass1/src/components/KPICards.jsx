import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const KPICards = () => {
   const kpiData = [{
      id:1,
      title:"Sales",
      icon:"eure icon",
      amount:"12000",
      color:"pink",
      bgColor:"hotpink"
   },{
      id:2,
      title:"Sales",
      icon:"eure icon",
      amount:"12000",
      color:"pink",
      bgColor:"hotpink"
   },{
      id:3,
      title:"Sales",
      icon:"eure icon",
      amount:"12000",
      color:"pink",
      bgColor:"hotpink"
   }]

   const deneme = kpiData.reduce((curr, i) =>i.id+curr,0)
   console.log(deneme)
	return (
		<Stack justifyContent={"center"} alignContent={"center"} flexWrap={"wrap"}>
         {kpiData.map((data) => (
            <Paper key={data.id} elevation={3} >Merhaba</Paper>
         ))}
			
		</Stack>
	);
};

export default KPICards;

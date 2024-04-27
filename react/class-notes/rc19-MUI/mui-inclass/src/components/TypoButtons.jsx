import { Box, Button, Stack, Typography } from "@mui/material";

const TypoButtons = () => {
	return (
		<div>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					p: 2,
					alignItems: "flex-end",
				}}
			>
				<Typography variant="h1" component="h3">
					Deneme
				</Typography>
				<Typography variant="body1" color="violet">
					Bu bir elementrrir
				</Typography>
				<Typography variant="body2" color="#DC143C">
					Bu bir elementrrir
				</Typography>
				<Typography variant="subtitle1" color="primary">
					Bu bir elementrrir
				</Typography>
				<Typography variant="subtitle1" color="primary.light">
					Bu bir elementrrir
				</Typography>
				<Typography variant="subtitle1" color="primary.dark">
					Bu bir elementrrir
				</Typography>
				<Typography variant="subtitle2" color="secondary" mt={3}>
					Bu bir elementrrir
				</Typography>
				<Typography variant="button" color="error" mt={3}>
					Bu bir elementrrir
				</Typography>
			</Box>

			<Typography variant="h2" align="center" mt={4} color={"turquoise"}>
				Buttons
			</Typography>
			<Stack
				direction={"row"}
				mt={3}
				gap={2}
				justifyContent={"center"}
				flexWrap={"wrap"}
			>
				<Button variant="text">Text</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined" color="error">
					Outlined
				</Button>

				<Button variant="text">Text</Button>
				<Button variant="contained" color="warning">
					Contained
				</Button>
				<Button variant="outlined" color="error">
					Outlined
				</Button>
				<Button variant="outlined" sx={{color:"black", backgroundColor:"#bede", ":hover": {backgroundColor:"#3ac798ed"}}}>
					Outlined
				</Button>
			</Stack>
		</div>
	);
};

export default TypoButtons;

import React, { useState } from "react";
import Container from "@mui/material/Container";
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const TextFieldComp = () => {
	const [err, setErr] = useState(false);
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	return (
		<Container
			maxWidth="md"
			align="center"
			sx={{
				border: "1px solid red",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
				color="success"
				helperText={err && "yanlış email girdiniz"}
				error={err}
				type="email"
				required
				onFocus={()=> setErr(true)}
				onBlur={()=> setErr(false)}
			/>
			<TextField id="filled-basic" label="Filled" variant="filled" />
			<TextField id="standard-basic" label="Standard" variant="standard" />


			<FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

		</Container>
	);
};

export default TextFieldComp;

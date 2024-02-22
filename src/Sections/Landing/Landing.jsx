import React from "react";
import Shelf from "./shelf/Shelf";
import { Box, Container, Grid, Typography } from "@mui/material";
function Landing() {
	return (
		<Box className="landing" sx={{ height: "100vh", bgcolor: "primary.main" }}>
			<Grid
				container
				sx={{
					height: "100%",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Grid item md={8}>
					<Typography
						variant="h3"
						sx={{ color: "primary.dark", padding: "10px" }}
						textAlign="center"
					>
						Bring Your Coffee, And Start Your Reading Journey
					</Typography>
				</Grid>
				<Grid item md={4}>
					<Shelf />
				</Grid>
			</Grid>
		</Box>
	);
}

export default Landing;

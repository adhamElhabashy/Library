import React from "react";
import Shelf from "./shelf/Shelf";
import { Box, Container, Typography } from "@mui/material";
function Landing() {
	return (
		<Box className="landing" sx={{ height: "100vh", bgcolor: "primary.main" }}>
			<Container
				sx={{
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography
					variant="h3"
					sx={{ color: "primary.dark" }}
					textAlign="left"
				>
					Bring Your Coffee, And Start Your Reading Journey
				</Typography>
				<Shelf />
			</Container>
		</Box>
	);
}

export default Landing;

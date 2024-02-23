import React from "react";
import { Box, Typography } from "@mui/material";

function NoPageFound() {
	return (
		<Box sx={{ height: "100vh", width: "100%", bgcolor: "primary.main" }}>
			<Typography
				variant="h2"
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					color: "primary.dark",
				}}
			>
				No Page Found
			</Typography>
		</Box>
	);
}

export default NoPageFound;

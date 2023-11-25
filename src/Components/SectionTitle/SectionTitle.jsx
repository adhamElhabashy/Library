import { Typography } from "@mui/material";
import React from "react";

function SectionTitle({ children }) {
	return (
		<Typography
			variant="h3"
			sx={{ color: "primary.dark", padding: 5 }}
			align="center"
		>
			{children}
		</Typography>
	);
}

export default SectionTitle;

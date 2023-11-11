import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
	BookSharp,
	Bookmarks,
	Interests,
	MenuBook,
	Search,
	Settings,
} from "@mui/icons-material";
import { Container } from "@mui/material";

function Header() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Container sx={{ flexGrow: 1, position: "relative" }}>
			<AppBar position="fixed">
				<Toolbar sx={{ color: "primary.dark" }}>
					<IconButton color="inherit" aria-label="logo icon" size="large">
						<MenuBook fontSize="large" />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						The Library
					</Typography>
					<div>
						<IconButton
							size="large"
							color="inherit"
							aria-label="open drawer"
							aria-controls={open ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
						>
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						"aria-labelledby": "menu-button",
					}}
					sx={{ marginRight: "30px !important" }}
				>
					<MenuItem onClick={handleClose}>
						<Interests
							className="menu-icons"
							color="primary.dark"
							sx={{ paddingRight: 1, color: "primary.dark" }}
						/>
						For You
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<BookSharp
							className="menu-icons"
							sx={{ paddingRight: 1, color: "primary.dark" }}
						/>
						Trending Books
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Search
							className="menu-icons"
							sx={{ paddingRight: 1, color: "primary.dark" }}
						/>
						Search
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<EmojiEventsIcon
							className="menu-icons"
							sx={{ color: "primary.dark" }}
						/>
						Challenges
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Bookmarks
							className="menu-icons"
							sx={{ paddingRight: 1, color: "primary.dark" }}
						/>
						Your Books
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Settings
							className="menu-icons"
							sx={{ paddingRight: 1, color: "primary.dark" }}
						/>
						Settings
					</MenuItem>
				</Menu>
			</AppBar>
		</Container>
	);
}

export default Header;

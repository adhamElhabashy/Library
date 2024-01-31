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
import { Link } from "react-router-dom";

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
						<Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
							The Library
						</Link>
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
					<MenuItem onClick={handleClose} sx={{ color: "primary.dark" }}>
						<Interests className="menu-icons" sx={{ paddingRight: 1 }} />
						<Link
							to={"/favourite"}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							For You
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose} sx={{ color: "primary.dark" }}>
						<BookSharp className="menu-icons" sx={{ paddingRight: 1 }} />
						<Link style={{ textDecoration: "none", color: "inherit" }}>
							Trending Books
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose} sx={{ color: "primary.dark" }}>
						<Search className="menu-icons" sx={{ paddingRight: 1 }} />
						<Link
							to={"/search"}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							Search
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose} sx={{ color: "primary.dark" }}>
						<Bookmarks className="menu-icons" sx={{ paddingRight: 1 }} />
						<Link
							to={"/saved-books"}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							Your Books
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose} sx={{ color: "primary.dark" }}>
						<Settings className="menu-icons" sx={{ paddingRight: 1 }} />
						<Link
							to={"/settings"}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							Settings
						</Link>
					</MenuItem>
				</Menu>
			</AppBar>
		</Container>
	);
}

export default Header;

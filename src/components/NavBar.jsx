import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import CustomLink from './CustomLink';
import { Link } from '@mui/material';
import data from '../data/me.json';

function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="fixed" margin={0} elevation={0}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					{/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
					{/* <Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						G
					</Typography> */}

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' } }}
						>
							{data.navbar_pages.map((page) => {
								let link = '#' + page.split(' ').join('_').toLocaleLowerCase();
								return (
									<CustomLink key={page} onClick={handleCloseNavMenu} href={link} sx={{ paddingBottom: '3px' }}>
										{page}
									</CustomLink>
								);
							})}
						</Menu>
					</Box>
					{/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Gonzalo
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{data.navbar_pages.map((page) => {
							let link = null;
							if ('resume'.includes(page.toLocaleLowerCase())) {
								link = '#about_me';
							} else {
								link = '#' + page.split(' ').join('_').toLowerCase();
							}
							return (
								<CustomLink key={page} href={link} onClick={handleCloseNavMenu} sx={{ color: 'white' }}>
									{page}
								</CustomLink>
							);
						})}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Link href="#landing">
							<Avatar alt="Gonzalo" src={'/Peronsal_Website/me.jpg'} />
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;

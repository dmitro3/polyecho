import { Fragment, useState } from 'react'
import Link from 'next/link'
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Button,
	MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ConnectedAccount from './ConnectedAccount'

const styles = {
	wrapper: {
		marginBottom: 4,
		backgroundColor: '#111',
	},
	logoDesktop: {
		mr: 2,
		display: { xs: 'none', md: 'flex' },
		textShadow: '1px 1px #23F09A',
		color: '#fff',
	},
	logoMobile: { display: { xs: 'flex', alignItems: 'center', md: 'none' }, ml: 1 },
}

const pages = [
	{ href: '/', title: 'Home' },
	{ href: '/projects', title: 'Explore' },
	{ href: '/projects/new', title: 'Create' },
]

const AppHeader = (): JSX.Element => {
	const [anchorElNav, setAnchorElNav] = useState(null)

	const handleOpenNavMenu = (e: { target: any }) => {
		setAnchorElNav(e.target)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<AppBar position="static" sx={styles.wrapper} enableColorOnDark>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography variant="h6" noWrap component="div" sx={styles.logoDesktop}>
						PolyEcho
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
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
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map(page => (
								<MenuItem onClick={handleCloseNavMenu} key={page.href}>
									<Typography textAlign="center">{page.title}</Typography>
								</MenuItem>
							))}
						</Menu>
						<Typography variant="h6" noWrap component="div" sx={styles.logoMobile}>
							PolyEcho
						</Typography>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map(page => (
							<Link key={page.href} href={page.href} passHref>
								<Button key={page.href} sx={{ my: 2, color: 'white', display: 'block' }}>
									{page.title}
								</Button>
							</Link>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<ConnectedAccount />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default AppHeader

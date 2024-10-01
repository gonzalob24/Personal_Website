import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Container, Button, Typography, colors } from '@mui/material';

function LandingPage() {
	return (
		<>
			<Container
				sx={{
					minHeight: {
						xs: '100vh',
						lg: '100vh',
					},
					minWidth: {
						xs: '100vw',
						lg: '100vw',
					},
					display: 'flex',
					position: 'absolute',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundImage: { lg: `url(${'/board.avif'})` },
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					// backgroundPosition: 'bottom -22rem',
					// zIndex: 800,
					opacity: 0.5,
					// backgroundPosition: 'right 5rem bottom',
				}}
			/>
			<Container
				className="gg"
				sx={{
					minHeight: {
						xs: '100vh',
						lg: '100vh',
					},
					minWidth: {
						xs: '100vw',
						lg: '100vw',
					},
					display: 'flex',
					position: 'relative',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					// zIndex: 1000,
				}}
			>
				<Box marginBottom={5} opacity={1}>
					<Typography gutterBottom variant="h4" fontWeight={200}>
						<Typography color="secondary" component="span" variant="inherit">
							Hey there,{' '}
						</Typography>
						I'm Gonzalo Betancourt
					</Typography>
					<Typography gutterBottom variant="h2" display={'inline-flex'}>
						Software Engineer
					</Typography>
					<Typography gutterBottom variant="h6">
						Passionate about software, Full Stack and Automation
					</Typography>
					<Grid container spacing={2} my={3}>
						<Grid>
							<Button color="secondary" href="#portfolio" size="large" variant="contained">
								My Work
							</Button>
						</Grid>
						<Grid>
							<Button color="secondary" href="#my_contact" size="large" variant="outlined">
								Contact Me
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
}

export default LandingPage;

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import ListItem from '@mui/material/ListItem';
import { Avatar, Container, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Add from '@mui/icons-material/Add';

function LandingPage() {
	return (
		<>
			<Box component="section">
				<Container
					sx={{
						minHeight: {
							xs: '100vh',
							lg: '100vh',
						},
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						backgroundImage: { lg: `url(${'/dev.svg'})` },
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'right -3rem bottom',
					}}
				>
					<Box marginBottom={5} maxWidth={'xl'}>
						<Typography gutterBottom variant="h4" fontWeight={200}>
							<Typography color="primary" component="span" variant="inherit">
								Hello,{' '}
							</Typography>
							I'm Gonzalo Betancourt
						</Typography>
						<Typography gutterBottom variant="h2" display={'inline-flex'}>
							Software Engineer
						</Typography>
						<Typography gutterBottom variant="h6">
							Passionate about all things{' '}
							<Typography gutterBottom variant="h6" component={'span'} color="primary">
								Full Stack
							</Typography>
							{' ' + 'and' + ' '}
							<Typography gutterBottom variant="h6" component={'span'} color="primary">
								Automation
							</Typography>
						</Typography>
					</Box>
					<Grid container spacing={2}>
						<Grid>
							<Button color="primary" href="#portfolio" size="large" variant="contained">
								My Work
							</Button>
						</Grid>
						<Grid>
							<Button color="primary" href="#my_contact" size="large" variant="outlined">
								Contact Me
							</Button>
						</Grid>
					</Grid>
				</Container>
				{/* <Grid display={'flex'}>
							<Grid padding={2} size={8}>
								<Typography fontSize={20}>
									I am a Software Engineer with nearly four years of experience, specializing in Full Stack Development and Automation. I've led multiple initiatives that integrate advanced
									technologies with efficient workflows to build robust, scalable systems for both startups and established companies. I’m deeply passionate about my career and always eager to learn
									and adopt new technologies.
								</Typography>
							</Grid>
							<Grid size={4} alignContent={'center'} xs={12} display={{ xs: 'none', md: 'block' }}>
								<ImageListItem key={work.height}>
									<img alt="work" src={work.src} loading="lazy" />
								</ImageListItem>
							</Grid>
						</Grid>
						<Grid display={'flex'} padding={2} size={12}>
							<Typography marginRight={1} alignSelf="center" variant="h6" fontWeight={100}>
								Full Stack
							</Typography>
							<Add fontSize="large" />
							<Typography marginLeft={1} alignSelf="center" variant="h6" fontWeight={100}>
								Web Development
							</Typography>
						</Grid> */}
				{/* <Grid size={12}>
						<Typography variant="h3" align={'center'}>
							Portfolio
						</Typography>
						<Paper elevation={3}>
							<Grid display={'flex'}>
								<Grid padding={2} size={8}>
									<Typography fontSize={20}>
										I am a Software Engineer with nearly four years of experience, specializing in Full Stack Development and Automation. I've led multiple initiatives that integrate advanced
										technologies with efficient workflows to build robust, scalable systems for both startups and established companies. I’m deeply passionate about my career and always eager to learn
										and adopt new technologies.
									</Typography>
								</Grid>
								<Grid size={4} alignContent={'center'} xs={12} display={{ xs: 'none', md: 'block' }}>
									<ImageListItem key={work.height}>
										<img alt="work" src={work.src} loading="lazy" />
									</ImageListItem>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid size={12} backgroundColor={'green'}>
						<ListItem>size=4</ListItem>
					</Grid>
					<Grid size={12} backgroundColor={'green'}>
						<ListItem>size=8</ListItem>
					</Grid> */}
			</Box>
		</>
	);
}

export default LandingPage;

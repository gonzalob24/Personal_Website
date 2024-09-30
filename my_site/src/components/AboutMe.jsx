import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Container, Divider, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material/';
import { Code, Description } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import data from '../data/me.json';
import skillLogos from '../data/skillIcons';
// import { SiHtml5 } from 'react-icons/si';

// import skillIcons from './constants/skillIcons';

const LeftDivider = styled(Divider)(({ theme }) => ({
	height: '4px',
	width: '60px',
	backgroundColor: theme.palette.secondary.dark,
}));

function AboutMe() {
	return (
		<Box component="section" id="about_me" sx={{ pb: 8, pt: 10, bgcolor: (theme) => theme.palette.grey[900] }}>
			<Container>
				<Grid container spacing={8}>
					<Grid size={{ xs: 12, md: 4 }}>
						<Typography gutterBottom component="h2" variant="h3">
							About me
						</Typography>
						<LeftDivider />
					</Grid>

					<Grid size={{ xs: 12, md: 8 }}>
						<List disablePadding>
							{data.about_me.me.map((item, i) => (
								<ListItem key={i}>
									<ListItemIcon>
										<Code color="secondary" />
									</ListItemIcon>
									<ListItemText primary={item} />
								</ListItem>
							))}
						</List>
					</Grid>

					<Grid size={{ xs: 12, md: 4 }}>
						<Typography gutterBottom component="h2" variant="h3">
							Resume
						</Typography>
						<LeftDivider />
					</Grid>

					<Grid size={{ xs: 12, md: 8 }}>
						<Typography gutterBottom component="h3" variant="h4">
							Take a look at my resume here.
						</Typography>

						<Button color="primary" endIcon={<Description />} href="Gonzalo_resume.pdf" rel="noopener" size="large" target="_blank" variant="outlined">
							Resume
						</Button>
					</Grid>

					<Grid size={{ xs: 12, md: 4 }}>
						<Typography gutterBottom component="h2" variant="h3">
							Skills
						</Typography>
						<LeftDivider />
					</Grid>

					<Grid size={{ xs: 12, md: 8 }}>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								fontSize: '4rem',
								justifyContent: {
									xs: 'space-around',
									md: 'initial',
								},
							}}
						>
							{skillLogos.map((icon) => (
								<Box
									key={icon.title}
									sx={{
										m: {
											xs: '0 0.4rem',
											md: '0 1.3rem 0 0',
										},
										'&:hover': {
											color: 'primary.light',
										},
									}}
								>
									<icon.icon />
								</Box>
							))}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default AboutMe;

import { Box, Container, Typography, Card, CardContent, Chip, List, ListItem, ListItemIcon, ListItemText, ButtonGroup, Button, ImageListItem, ImageList } from '@mui/material/';
import Grid from '@mui/material/Grid2';
import { ChevronRight, GitHub, Visibility } from '@mui/icons-material';
import CustomLink from './CustomLink';

import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';

import data from '../data/me.json';

const CenteredDivider = styled(Divider)(({ theme }) => ({
	height: '4px',
	width: '60px',
	backgroundColor: theme.palette.secondary.main,
	margin: 'auto',
}));

function Portfolio() {
	return (
		<Box component="section" id="projects" sx={{ pb: 8, pt: 10 }}>
			<Container>
				<Typography gutterBottom align="center" component="h2" variant="h3">
					Portfolio
				</Typography>
				<CenteredDivider sx={{ mb: 4 }} />

				<Grid container spacing={4}>
					{data.portfolio.map((project) => (
						<Grid key={project.name} size={{ lg: 12, sm: 6, xs: 12 }}>
							<Card
								elevation={4}
								sx={{
									display: 'flex',
									height: '100%',
									flexDirection: {
										xs: 'column',
										lg: 'row',
									},
								}}
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										position: 'relative',
										flex: {
											lg: '1 1 600px',
										},
									}}
								>
									<Grid>
										<ImageList>
											<ImageListItem key={project.features[0]} cols={2} rows={1}>
												<img alt={project.alt} placeholder="blur" src={`${project.image}`} loading="lazy" />
											</ImageListItem>
										</ImageList>
									</Grid>
									<Box
										sx={{
											position: 'absolute',
											width: '100%',
											height: '100%',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											backgroundColor: 'rgba(0, 0, 0, 0.7);',
											opacity: 0,
											transition: 'all 0.3s ease-in-out',
											'&:hover': {
												opacity: 1,
											},
										}}
									>
										<ButtonGroup variant="contained">
											<Button aria-label="Link to project GitHub repository" component="a" href={project.repo_url} rel="noopener" startIcon={<GitHub />} target="_blank">
												Repo
											</Button>
											<Button aria-label="Link to project live preview" component="a" href={project.url} rel="noopener" startIcon={<Visibility />} target="_blank">
												Live
											</Button>
										</ButtonGroup>
									</Box>
								</Box>
								<CardContent
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
										height: '90%',
										width: {
											lg: '80%',
										},
									}}
								>
									<div>
										<CustomLink gutterBottom href={project.projectUrl} rel="noopener" sx={{ display: 'inline-block' }} target="_blank" variant="h5" color="primary">
											{project.name}
										</CustomLink>
										<Typography color="textSecondary" component="p" variant="subtitle1" marginLeft={2}>
											{project.summary}
										</Typography>

										<List
											dense
											sx={{
												display: 'flex',
												flexWrap: 'wrap',
												'& > *': {
													flex: {
														xs: '0 0 100%',
														lg: '0 0 50%',
													},
												},
											}}
										>
											{project.features.map((feature, i) => (
												<ListItem key={i}>
													<ListItemIcon sx={{ minWidth: 34 }}>
														<ChevronRight color="secondary" />
													</ListItemIcon>
													<ListItemText primary={feature} />
												</ListItem>
											))}
										</List>
									</div>

									<div>
										{project.tech_stack.map((e) => (
											<Chip key={e} label={e} size="small" sx={{ m: 0.5 }} variant="outlined" />
										))}
									</div>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}

export default Portfolio;

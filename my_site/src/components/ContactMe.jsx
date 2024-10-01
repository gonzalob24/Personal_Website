import { Box, Container, Typography, Avatar, Card, CardContent, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import CustomLink from './CustomLink';

import social_icons from '../data/social_icons';

const CenteredDivider = styled(Divider)(({ theme }) => ({
	height: '4px',
	width: '60px',
	backgroundColor: theme.palette.secondary.main,
	margin: 'auto',
}));

function ContactMe() {
	return (
		<Box component="section" id="contact">
			<Container maxWidth="sm">
				<Typography gutterBottom align="center" component="h2" variant="h3">
					Contact
				</Typography>
				<CenteredDivider />
				<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
					<Avatar sx={{ width: 200, height: 200 }} src={'/me.jpg'} />
				</Box>
				<Card sx={{ mb: 4, mt: 4 }}>
					<CardContent>
						<Typography color="textSecondary" component="p" variant="body2">
							Im ready to work with you on new and exciting project. Get in touch with me. Checkout my
							<CustomLink href={'Gonzalo_resume.pdf'} rel="noopener" target="_blank" style={{ paddingLeft: '4px', paddingRight: '0' }}>
								Resume
							</CustomLink>
							.
						</Typography>
					</CardContent>
					<Divider />
					<CardContent>
						<Typography gutterBottom textAlign="center" variant="body1">
							Find me here.
						</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							{social_icons.map((icon) => (
								<IconButton key={icon.label} aria-label={icon.label} href={icon.href} size="large" target="_blank">
									<icon.icon fontSize="large" />
								</IconButton>
							))}
						</Box>
					</CardContent>
				</Card>
				{/* TODO: Add email form for easier contact */}
				{/* <Typography align="center" component="h3" mb={2} variant="h4">
					Email me
				</Typography>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={1}>
						<Grid item sm={6} xs={12}></Grid>
					</Grid>
				</form> */}
			</Container>
		</Box>
	);
}

export default ContactMe;

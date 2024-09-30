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

function Contact() {
	return (
		<Box component="section" id="my_contact" sx={{ pb: 8, pt: 10 }}>
			<Container maxWidth="sm">
				<Typography gutterBottom align="center" component="h2" variant="h3">
					Contact
				</Typography>
				<CenteredDivider />
				<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
					<Avatar sx={{ width: 200, height: 200 }} src={'/me.jpg'} />
				</Box>
				<Card sx={{ mb: 4 }}>
					<CardContent>
						<Typography color="textSecondary" component="p" variant="body2">
							Gonzalo
							<CustomLink href="/#portfolio">Gonzalo</CustomLink>
							Gonzalo
							<CustomLink href={'Gonzalo_resume.pdf'} rel="noopener" target="_blank">
								Gonzalo
							</CustomLink>
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
			</Container>
		</Box>
	);
}

export default Contact;

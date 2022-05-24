import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import SvgIcon from '@mui/material/SvgIcon';

import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const MyButton = styled(ButtonBase)<ButtonProps>(({ theme }) => ({
	paddingTop: theme.spacing(1.1),
	paddingBottom: theme.spacing(1.1),
	paddingRight: theme.spacing(2.1),
	paddingLeft: theme.spacing(2.1),
	borderRadius: theme.spacing(1),
	fontSize: theme.spacing(3),
	fontFamily: "'Supermercado One', cursive",
}));

const Home: NextPage = () => {
	const title =
		'Mohammad Mahdi Afshar | Frontend Developer | محمد مهدی افشار | طراح وب | مدیر برنامه های تحت وب';
	const description =
		'20 years old, full stack web developer, FLOSS lover, Linux Enjoyer, Gamer, Music lover. I am a self-taught programmer and I am always trying to learn new things.';
	return (
		<React.Fragment>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} />
				<meta name="description" content={description} />
				<meta property="og:description" content={description} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content="/image.jpg" />
				<meta property="og:image" content="/image.jpg" />
				<meta property="og:url" content="https://mamad.dev" />
				<meta property="og:type" content="website" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto&family=Supermercado+One&family=Yanone+Kaffeesatz&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main>
				{/* <AppBar position="static">
					<Toolbar>
						<MyButton>About</MyButton>
						<MyButton>Projects</MyButton>
						<MyButton>Contact</MyButton>
					</Toolbar>
				</AppBar> */}
				<Box
					sx={{
						background: 'rgba(30, 12, 70, 0.7)',
						height: '14rem',
					}}
				/>
				<Container sx={{ pb: 10 }}>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
						}}
					>
						<Box sx={{ flex: 4 }}>
							<Avatar
								sx={{
									width: '250px',
									height: '250px',
									fontSize: 'xx-large',
									marginTop: '-6rem',
									border: '7px solid rgb(1, 5, 25)',
									borderColor: 'rgb(1, 5, 25)',
									boxShadow:
										'1.1px 1px 4.9px -8px rgba(0, 0, 0, 0.184), 3.1px 2.6px 9.1px -8px rgba(0, 0, 0, 0.236), 7.5px 6.3px 12.8px -8px rgba(0, 0, 0, 0.278), 25px 21px 17px -8px rgba(0, 0, 0, 0.32);',
								}}
								src="/image.jpg"
							>
								M
							</Avatar>
						</Box>
						<Box sx={{ flex: 9, mt: 2, width: 'max-content' }}>
							<Typography
								className="font"
								sx={{
									fontSize: '2.5rem',
									fontWeight: '700',
									marginBottom: '1rem',
									textAlign: 'left',
									width: 'max-content',
								}}
							>
								mohammad mahdi afshar
							</Typography>
							<Typography
								sx={{
									width: 'max-content',
									mt: -1,
									fontSize: '1.1rem',
									opacity: 0.8,
								}}
								className="font"
							>
								20 years old, full stack web developer.
							</Typography>
							<Box
								sx={{
									display: 'flex',
									gap: '4px',
									width: 'max-content',
								}}
							>
								<LocationOnIcon
									sx={{
										fontSize: '0.8rem',
										opacity: 0.5,
										width: 'max-content',
									}}
								/>
								<Typography
									sx={{
										fontSize: '0.8rem',
										opacity: 0.5,
										width: 'max-content',
									}}
									className="font"
								>
									Karaj, Alborz, Iran
								</Typography>
							</Box>
						</Box>
						<Box sx={{ flex: 2, mt: 2 }}>
							<MyButton
								className="sfont"
								sx={{
									background: 'rgba(30, 12, 70, 0.7)',
									px: '5rem',
									py: '1rem',
									width: 'max-content',
								}}
							>
								Hire Me
							</MyButton>
						</Box>
					</Box>

					<Box
						sx={{
							display: 'flex',
							gap: '1rem',
							mt: 2,
							mb: 2,
							justifyContent: 'center',
						}}
					>
						<IconButton
							sx={{ color: 'white' }}
							href="https://twitter.com/Mamikachuu"
							target="_blank"
						>
							<TwitterIcon />
						</IconButton>
						<IconButton
							sx={{ color: 'white' }}
							href="https://t.me/reloadlife"
							target="_blank"
						>
							<TelegramIcon />
						</IconButton>
						<IconButton
							sx={{ color: 'white' }}
							href="https://instagram.com/reloadlife"
							target="_blank"
						>
							<InstagramIcon />
						</IconButton>
						<IconButton
							sx={{ color: 'white' }}
							href="https://youtube.com/channel/UCjTZIBpln06RcS53oUIiCDA?sub_confirmation=1"
							target="_blank"
						>
							<YouTubeIcon />
						</IconButton>
						<IconButton
							sx={{ color: 'white' }}
							href="https://www.linkedin.com/in/reloadlife/"
							target="_blank"
						>
							<LinkedInIcon />
						</IconButton>
						<IconButton
							sx={{ color: 'white' }}
							href="https://github.com/reloadlife"
							target="_blank"
						>
							<GitHubIcon />
						</IconButton>
						<IconButton
							sx={{ color: 'white' }}
							href="https://gitlab.com/reloadlife"
							target="_blank"
						>
							<SvgIcon sx={{ color: 'white' }}>
								<path
									d="M21.94 13.11l-1.05-3.22c0-.03-.01-.06-.02-.09l-2.11-6.48a.859.859 0 0 0-.8-.57c-.36 0-.68.25-.79.58l-2 6.17H8.84L6.83 3.33a.851.851 0 0 0-.79-.58c-.37 0-.69.25-.8.58L3.13 9.82v.01l-1.07 3.28c-.16.5.01 1.04.44 1.34l9.22 6.71c.17.12.39.12.56-.01l9.22-6.7c.43-.3.6-.84.44-1.34M8.15 10.45l2.57 7.91l-6.17-7.91m8.73 7.92l2.47-7.59l.1-.33h3.61l-5.59 7.16m4.1-13.67l1.81 5.56h-3.62m-1.3.95l-1.79 5.51L12 19.24l-2.86-8.79M6.03 3.94L7.84 9.5H4.23m-1.18 4.19c-.09-.07-.13-.19-.09-.29l.79-2.43l5.82 7.45m11.38-4.73l-6.51 4.73l.02-.03l5.79-7.42l.79 2.43c.04.1 0 .22-.09.29"
									fill="#FEFEFE"
								/>
							</SvgIcon>
						</IconButton>
						<IconButton
							href="https://open.spotify.com/user/reloadlife"
							target="_blank"
						>
							<SvgIcon sx={{ color: 'white' }}>
								<path
									d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12s12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24c-2.82-1.74-6.36-2.101-10.561-1.141c-.418.122-.779-.179-.899-.539c-.12-.421.18-.78.54-.9c4.56-1.021 8.52-.6 11.64 1.32c.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3c-3.239-1.98-8.159-2.58-11.939-1.38c-.479.12-1.02-.12-1.14-.6c-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721c-.18-.601.18-1.2.72-1.381c4.26-1.26 11.28-1.02 15.721 1.621c.539.3.719 1.02.419 1.56c-.299.421-1.02.599-1.559.3z"
									fill="#FEFEFE"
								/>
							</SvgIcon>
						</IconButton>
						<IconButton
							sx={{ color: 'white' }}
							href="https://reddit.com/user/reloadlifeme"
							target="_blank"
							title="DO NOT EVER GO THERE. thank you <3"
						>
							<RedditIcon />
						</IconButton>
					</Box>

					<Divider sx={{ mt: 1, borderColor: '#FFF' }} />

					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '0.3rem',
							mt: 2,
							p: 1,
						}}
					>
						<Box sx={{ flex: 2 }}>
							<Typography className="sfont">About Me</Typography>
						</Box>
						<Box sx={{ flex: 8 }}>
							<Typography>
								a 21 year old fullstack web developer, i love learning new
								technologies and solving problems.
							</Typography>
							<Typography>
								in my life i try not to waste any time, and
								spend every second of it doing useful things,
								but when it comes to wasting my time, i'd rather
								play video games and sometimes stream them on my{' '}
								<Link
									sx={{
										color: 'red',
										textDecoration: 'none',
									}}
									href="https://twitch.tv/Mamikachu"
								>
									Twitch Channel @ Mamikachu
								</Link>
							</Typography>
						</Box>
					</Box>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: '2rem',
							background: 'rgba(30, 12, 70, 0.7)',
							p: 4,
							borderRadius: '0.5rem',
							flexFlow: 'row wrap',
							flexWrap: 'wrap',
							flexGrow: 1,
						}}
					>
						<Box>
							<Typography
								sx={{ fontSize: '0.9rem' }}
								className="sfont"
							>
								Location
							</Typography>
							<Box
								sx={{
									display: 'flex',
									gap: '6px',
									ml: 0.5,
									mt: 1,
									fontSize: '1rem',
								}}
							>
								<LocationOnIcon />
								<Typography>Karaj, Iran</Typography>
							</Box>
						</Box>
						<Box>
							<Typography
								sx={{ fontSize: '0.9rem' }}
								className="sfont"
							>
								WebSite
							</Typography>
							<Box
								sx={{
									display: 'flex',
									gap: '6px',
									ml: 0.5,
									mt: 1,
									fontSize: '1rem',
								}}
							>
								<LanguageIcon />
								<Link
									sx={{
										textDecoration: 'none',
										color: 'red',
									}}
									href="https://mamad.dev"
								>
									mamad.dev
								</Link>
							</Box>
						</Box>
						<Box>
							<Typography
								sx={{ fontSize: '0.9rem' }}
								className="sfont"
							>
								Phone
							</Typography>
							<Box
								sx={{
									display: 'flex',
									gap: '6px',
									ml: 0.5,
									mt: 1,
									fontSize: '1rem',
								}}
							>
								<PhoneAndroidIcon />
								<Link
									sx={{
										textDecoration: 'none',
										color: 'red',
									}}
									href="tel:+98 935 931 0395"
								>
									+98 935 931 0395
								</Link>
							</Box>
						</Box>
						<Box>
							<Typography
								sx={{ fontSize: '0.9rem' }}
								className="sfont"
							>
								Email
							</Typography>
							<Box
								sx={{
									display: 'flex',
									gap: '6px',
									ml: 0.5,
									mt: 1,
									fontSize: '1rem',
								}}
							>
								<AlternateEmailIcon />
								<Link
									sx={{
										textDecoration: 'none',
										color: 'red',
									}}
									href="mailto:me@mamad.dev"
								>
									me@mamad.dev
								</Link>
							</Box>
						</Box>
					</Box>

					<Divider sx={{ mt: 6, borderColor: '#FFF' }} />

					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '0.3rem',
							mt: 2,
							p: 1,
						}}
					>
						<Box sx={{ flex: 2 }}>
							<Typography className="sfont">
								My Experiences
							</Typography>
						</Box>
						<Box sx={{ flex: 8 }}>
							<Typography>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'red',
										mr: 1,
									}}
								>
									[ SOME WHERE ]
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										mr: 1,
									}}
								>
									— Python Developer
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.4',
										mx: 1,
									}}
								>
									2022 - now
								</Link>

								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										fontSize: '0.7rem',
										mr: 1,
									}}
								>
									[SOME WHERE]
								</Link>
							</Typography>

							<Typography>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'red',
										mr: 1,
									}}
								>
									SeedTech
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										mr: 1,
									}}
								>
									— Front-end Developer
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.4',
										mx: 1,
									}}
								>
									2021 - 2022
								</Link>

								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										fontSize: '0.7rem',
										mr: 1,
									}}
								>
									Tehran
								</Link>
							</Typography>

							<Typography>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'red',
										mr: 1,
									}}
								>
									SquidTech
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										mr: 1,
									}}
								>
									— Front-end Developer
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.4',
										mx: 1,
									}}
								>
									2020 - 2021
								</Link>

								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										fontSize: '0.7rem',
										mr: 1,
									}}
								>
									Toronto
								</Link>
							</Typography>

							<Typography>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'red',
										mr: 1,
									}}
								>
									Satrapp
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										mr: 1,
									}}
								>
									— Backend Developer
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.4',
										mx: 1,
									}}
								>
									2020 - 2021
								</Link>

								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										fontSize: '0.7rem',
										mr: 1,
									}}
								>
									Karaj
								</Link>
							</Typography>

							<Typography>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'red',
										mr: 1,
									}}
								>
									AdsPress
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										mr: 1,
									}}
								>
									— Backend Developer
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.4',
										mx: 1,
									}}
								>
									2020 - 2021
								</Link>

								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										fontSize: '0.7rem',
										mr: 1,
									}}
								>
									Tabriz
								</Link>
							</Typography>

							<Typography>
								<Link
									href="https://azardata.net"
									sx={{
										textDecoration: 'none',
										color: 'red',
										mr: 1,
									}}
								>
									Azardata
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										mr: 1,
									}}
								>
									— System administrator
								</Link>
								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.4',
										mx: 1,
									}}
								>
									2016 - 2020
								</Link>

								<Link
									sx={{
										textDecoration: 'none',
										color: 'white',
										opacity: '0.5',
										fontSize: '0.7rem',
										mr: 1,
									}}
								>
									Tabriz
								</Link>
							</Typography>
						</Box>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '0.3rem',
							mt: 2,
							p: 1,
						}}
					>
						<Box sx={{ flex: 2 }}>
							<Typography className="sfont">
								Technologies
							</Typography>
						</Box>
						<Box sx={{ flex: 8 }}>
							<Typography>
								NodeJS, TypeScript, JavaScript, React, Mantine, Remix,
								Next.JS, GraphQL
								Django, Python, Flask, FastAPI,
								MaterialUI, TailwindCSS, ChakraUi, HTML5/CSS3,
								Git, PHP, Laravel, MySQL, Redis, InfluxDB, MongoDB,
								Telegram Bots, PostgreSQL, Docker, Kubernetes,
								Julia, GoLang,
								Telegram MTProto, Bash, Lua, MoonScript, Ruby,
								DevOps, Linux, Server Management, Server
								Configuration, Virtualization.
							</Typography>
						</Box>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '0.3rem',
							mt: 2,
							p: 1,
						}}
					>
						<Box sx={{ flex: 2 }}>
							<Typography className="sfont">Tools</Typography>
						</Box>
						<Box sx={{ flex: 8 }}>
							<Typography>
								Jetbrains Idea, Github, GitLab, Docker,
								Discord/Slack, VS-Code, Linux, Figma, Adobe XD,
								Adobe Photoshop, Adobe Illustrator
							</Typography>
						</Box>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '0.3rem',
							mt: 2,
							p: 1,
						}}
					>
						<Box sx={{ flex: 2 }}>
							<Typography className="sfont">Interests</Typography>
						</Box>
						<Box sx={{ flex: 8 }}>
							<Typography>
								Ai, MachineLearning, Scripting, Front-end, Laravel, Gaming,
								Streaming, Premiere Pro, Web Scraping, Docker,
								Hacking, Pentesting, Virtualization, Learning
								new Stuff
							</Typography>
						</Box>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '0.3rem',
							mt: 2,
							p: 1,
						}}
					>
						<Box sx={{ flex: 2 }}>
							<Typography className="sfont">Resume [Outdated]</Typography>
						</Box>
						<Box sx={{ flex: 8 }}>
							<Typography>
								<Link
									sx={{
										color: 'red',
										textDecoration: 'none',
									}}
									href="/resume.pdf"
								>
									Download: Resume.PDF
								</Link>
							</Typography>
							<Typography>
								for a better and updated resume, you can always
								email me at{' '}
								<Link
									sx={{
										color: 'red',
										textDecoration: 'none',
									}}
									href="mailto:me@mamad.dev"
								>
									me@mamad.dev
								</Link>
							</Typography>
						</Box>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '0.3rem',
							mt: 2,
							p: 1,
						}}
					>
						<Box sx={{ flex: 2 }}>
							<Typography className="sfont">Projects</Typography>
						</Box>
						<Box sx={{ flex: 8 }}>

							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Typography>
									<Link
										sx={{
											color: 'red',
											textDecoration: 'none',
										}}
										href="https://github.com/reloadlife/freedom-of-internet"
									>
										Freedom-Of-Internet
									</Link>
								</Typography>

								<Typography sx={{ fontStyle: 'italic' }}>
									No Pain Self Hosted VPN
								</Typography>

								<Typography
									sx={{ fontWeight: '300', opacity: 0.8 }}
								>
									2022
								</Typography>
							</Box>

							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Typography>
									<Link
										sx={{
											color: 'red',
											textDecoration: 'none',
										}}
										href="https://github.com/reloadlife/TeleLib"
									>
										@TeleLib/TeleLib
									</Link>
								</Typography>

								<Typography sx={{ fontStyle: 'italic' }}>
									Open Source Telegram NodeJS API Wrapper
								</Typography>

								<Typography
									sx={{ fontWeight: '300', opacity: 0.8 }}
								>
									2022
								</Typography>
							</Box>


							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Typography>
									<Link
										sx={{
											color: 'red',
											textDecoration: 'none',
										}}
										href="https://RespectBot.link"
									>
										RespectBot
									</Link>
								</Typography>

								<Typography sx={{ fontStyle: 'italic' }}>
									Static Ui, React, Next.js
								</Typography>

								<Typography
									sx={{ fontWeight: '300', opacity: 0.8 }}
								>
									2022
								</Typography>
							</Box>

							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Typography>
									<Link
										sx={{
											color: 'red',
											textDecoration: 'none',
										}}
										href="https://t.me/ChatogeramBot"
									>
										ChatogeramBot
									</Link>
								</Typography>

								<Typography sx={{ fontStyle: 'italic' }}>
									Telegram Chat Bot, Laravel
								</Typography>

								<Typography
									sx={{ fontWeight: '300', opacity: 0.8 }}
								>
									2019
								</Typography>
							</Box>

							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Typography>
									<Link
										sx={{
											color: 'red',
											textDecoration: 'none',
										}}
										href="https://t.me/AntispamCr"
									>
										AntiSpamCr
									</Link>
								</Typography>

								<Typography sx={{ fontStyle: 'italic' }}>
									Telegram Bot Manager, Node, PHP
								</Typography>

								<Typography
									sx={{ fontWeight: '300', opacity: 0.8 }}
								>
									2018
								</Typography>
							</Box>

							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									width: '100%',
									mt: 2
								}}
							>
								<Typography sx={{ fontWeight: 'light' }}>
									<Link
										sx={{
											color: 'white',
											textDecoration: 'underline',
										}}
										href="https://github.com/ReloadLife"
									>
										GitHub | My Other random open-source projects
									</Link>
								</Typography>
							</Box>
						</Box>
					</Box>
				</Container>
			</main>
		</React.Fragment>
	);
};

export default Home;

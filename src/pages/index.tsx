import type { NextPage } from 'next'
import {
	Container,
	Text,
	createStyles,
	Box,
	Badge,
	Group,
	Kbd,
	List,
	Button,
} from '@mantine/core'
import Head from 'next/head'
import { ArrowDown } from 'tabler-icons-react'
import { useScrollIntoView } from '@mantine/hooks'

const BREAKPOINT = '@media (max-width: 755px)'

const useStyles = createStyles((theme) => ({
	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 55,
		fontWeight: 900,
		lineHeight: 1.1,
		margin: 0,
		padding: 0,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,

		[BREAKPOINT]: {
			fontSize: 38,
			lineHeight: 1.2,
		},
	},

	title_smaller: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 48,
		fontWeight: 900,
		lineHeight: 1.1,
		margin: 0,
		padding: 0,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,

		[BREAKPOINT]: {
			fontSize: 28,
			lineHeight: 1.2,
		},
	},

	description: {
		marginTop: theme.spacing.xl,
		fontSize: 24,

		[BREAKPOINT]: {
			fontSize: 18,
		},
	},

	about_me_description: {
		marginTop: theme.spacing.xl,
		fontSize: 17,

		[BREAKPOINT]: {
			fontSize: 12,
		},
	},

	smaller: {
		marginTop: theme.spacing.xl,
		fontSize: 13,

		[BREAKPOINT]: {
			fontSize: 11,
		},
	},

	control: {
		height: 54,
		paddingLeft: 38,
		paddingRight: 38,

		[BREAKPOINT]: {
			height: 54,
			paddingLeft: 18,
			paddingRight: 18,
			flex: 1,
		},
	},
}))

const Home: NextPage = () => {
	const age = Math.abs(
		Math.round(
			(new Date('11/27/2001').getTime() - new Date().getTime()) /
				(1000 * 3600 * 24 * 365)
		)
	)

	const description = `${age} Years old English Translation Student who loves coding and developing new tools and services.`
	const title =
		'Home | Mohammad Mahdi Afshar | Software Engineer | محمد مهدی افشار'

	const { classes, cx } = useStyles()

	const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
		offset: 60,
	})

	const { scrollIntoView: skillsScrollIntoView, targetRef: skillsTarget } =
		useScrollIntoView<HTMLDivElement>({
			offset: 60,
		})

	const { scrollIntoView: contactScrollIntoView, targetRef: contactTarget } =
		useScrollIntoView<HTMLDivElement>({
			offset: 60,
		})

	return (
		<>
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
			</Head>

			<Box
				id="home"
				sx={{
					minHeight: '95vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Container size={700}>
					<h1 className={classes.title}>
						I am{' '}
						<Text<'span'>
							component="span"
							variant="gradient"
							gradient={{ from: 'red', to: 'cyan' }}
							inherit
						>
							Mohammad Mahdi Afshar
						</Text>{' '}
						{age} Years Old Full Stack Developer.
					</h1>

					<Text className={classes.description} color="dimmed">
						I am a{' '}
						<Text<'span'>
							component="span"
							variant="gradient"
							gradient={{ from: 'red', to: 'cyan' }}
							inherit
						>
							English Translation Student
						</Text>{' '}
						Who works as a Full Stack Developer and Loves Coding and
						Developing new tools and services.
					</Text>

					{/* <Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Button
							size="xl"
							sx={{
								marginTop: 60,
							}}
							className={classes.control}
							variant="gradient"
							gradient={{ from: 'red', to: 'cyan' }}
						>
							Hire Me
						</Button>
					</Box> */}

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 90,
							cursor: 'pointer',
						}}
						onClick={(e: React.MouseEvent) => {
							e.preventDefault()
							scrollIntoView()
						}}
					>
						<ArrowDown className="bounce animated" size={60} />
					</Box>
				</Container>
			</Box>

			<Box
				ref={targetRef}
				id="about"
				sx={{
					minHeight: '90vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Container size={700}>
					<h1 className={cx(classes.title, 'cursive-font')}>
						About Me
					</h1>

					<Text
						className={classes.about_me_description}
						color="dimmed"
					>
						A full stack developer with a passion for building
						beautiful, performant, and user-friendly applications.
						<br />I Love scripting, scraping and creating new tools
						just for for fun. in my free time, I enjoy playing video
						games, watching movies, and listening to music or
						Learning new Stuff.{' '}
						<Box sx={{ display: 'inline', fontSize: 14 }}>
							(Currently trying to figure out GoLang, Artificial
							Intelligence and Machine Learning stuff)
						</Box>
						<br /> Most of the times, you can find me Streaming Game
						Stuff on twitch and occasionally on coding stuff.
					</Text>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 90,
							cursor: 'pointer',
						}}
						onClick={(e: React.MouseEvent) => {
							e.preventDefault()
							skillsScrollIntoView()
						}}
					>
						<ArrowDown className="bounce animated" size={60} />
					</Box>
				</Container>
			</Box>

			<Box
				ref={skillsTarget}
				id="resume"
				sx={{
					minHeight: '90vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Container size={700}>
					<h1 className={cx(classes.title_smaller, 'cursive-font')}>
						Skills That i have acquired over the years
					</h1>

					<Group spacing={8} sx={{ padding: 10, marginTop: 25 }}>
						{[
							'NodeJS',
							'TypeScript',
							'JavaScript',
							'React',
							'Mantine',
							'Remix',
							'RedWood',
							'Next.JS',
							'GraphQL',
							'Django',
							'Python',
							'Flask',
							'FastAPI',
							'MaterialUI',
							'TailwindCSS',
							'ChakraUi',
							'HTML5',
							'CSS3',
							'Git',
							'PHP',
							'Laravel',
							'MySQL',
							'Redis',
							'InfluxDB',
							'MongoDB',
							'Telegram Bots',
							'PostgreSQL',
							'Docker',
							'Kubernetes',
							'Julia',
							'GoLang',
							'Telegram MTProto',
							'Bash',
							'Lua',
							'MoonScript',
							'Ruby',
							'DevOps',
							'Linux',
							'Server Management',
							'Server Configuration',
							'Virtualization',
						].map((skill: string, index: number) => (
							<Badge id={skill + index}>{skill}</Badge>
						))}
					</Group>

					<Text
						className={classes.about_me_description}
						color="dimmed"
					>
						with the skills that I have acquired over the years, I
						have been able to build a variety of applications and
						services.
						<br />
						here are some of the projects that I have worked / am
						working on:
					</Text>
					<List size="sm" withPadding sx={{ marginTop: 15 }}>
						<List.Item>
							<a
								href="https://github.com/Unleash-The-Internet/freedom-of-internet"
								target="_blank"
							>
								Freedom Of Internet
							</a>{' '}
							- Open Source - No Pain Self Hosted VPN Container
						</List.Item>
						<List.Item>
							<a
								href="https://github.com/TeleLib/TeleLib"
								target="_blank"
							>
								TeleLib
							</a>{' '}
							- Open Source - Multi Language Telegram API Wrapper
						</List.Item>
						<List.Item>
							<a href="https://respectbot.link/" target="_blank">
								RespectBot
							</a>{' '}
							- Static Ui using React and Next.JS
						</List.Item>
						<List.Item>
							<a
								href="https://t.me/ChatogeramBot"
								target="_blank"
							>
								ChatogeramBot
							</a>{' '}
							- Telegram Bot, Laravel, No longer working on it
						</List.Item>
						<List.Item>
							<a href="https://t.me/AntispamCr" target="_blank">
								AntispamCr
							</a>{' '}
							- Telegram Bot Manager, Laravel, PHP
						</List.Item>

						<List.Item>
							<a
								href="https://github.com/ReloadLife"
								target="_blank"
							>
								Check my github for Random fun projects
							</a>
						</List.Item>
					</List>
					<Text className={classes.smaller} color="dimmed">
						You can Download My Resume from{' '}
						<Button<'a'>
							component="a"
							href="/resume.pdf"
							variant="subtle"
							color="grape"
							radius="md"
							compact
						>
							Download [Outdated]
						</Button>
						<br />
						or send me an email at{' '}
						<a href="mailto:me@mamad.dev">me@mamad.dev</a> to get
						the latest version of it (i'm too lazy to update it
						regularly on my website:])
					</Text>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 90,
							cursor: 'pointer',
						}}
						onClick={(e: React.MouseEvent) => {
							e.preventDefault()
							contactScrollIntoView()
						}}
					>
						<ArrowDown className="bounce animated" size={60} />
					</Box>
				</Container>
			</Box>

			<Box
				ref={contactTarget}
				id="contact"
				sx={{
					minHeight: '90vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Container size={700}>
					<h1 className={cx(classes.title, 'cursive-font')}>
						Get in Touch
					</h1>

					<Text
						className={classes.about_me_description}
						color="dimmed"
					>
						Wanna get in touch ?
						<br />
						you can mail me at{' '}
						<a href="mailto:me@mamad.dev">me@mamad.dev</a>
						<br />
						or you can find me on{' '}
						<a
							href="https://twitter.com/mamad_dev"
							target="_blank"
							rel="noopener noreferrer"
						>
							Twitter
						</a>
						<br />
						Message me on{' '}
						<a
							href="https://telegram.me/TheyCallMeMamaD"
							target="_blank"
							rel="noopener noreferrer"
						>
							Telegram
						</a>
						<br />
						if you want to find me on other platforms or call me
						press <Kbd>/</Kbd> on your Keyboard and search 'Contact'
						for my contact options or 'social' for my Socials
					</Text>
				</Container>
			</Box>
		</>
	)
}

export default Home

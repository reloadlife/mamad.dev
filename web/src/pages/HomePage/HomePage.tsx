import {
	Container,
	Text,
	useMantineTheme,
	createStyles,
	Button,
} from '@mantine/core'
import { Head } from '@redwoodjs/web'

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
	description: {
		marginTop: theme.spacing.xl,
		fontSize: 24,

		[BREAKPOINT]: {
			fontSize: 18,
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

const HomePage = () => {
	const age = Math.abs(
		Math.round(
			(new Date('11/27/2001').getTime() - new Date().getTime()) /
				(1000 * 3600 * 24 * 365)
		)
	)

	const description = `${age} Years old English Translation Student who loves coding and developing new tools and services.`
	const title =
		'Home | Mohammad Mahdi Afshar | Software Engineer | محمد مهدی افشار'

	const { classes } = useStyles()
	const theme = useMantineTheme()

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
					who loves coding and developing new tools and services.
				</Text>

				<Button
					size="xl"
					sx={{
						marginTop: theme.spacing.xl,
					}}
					className={classes.control}
					variant="gradient"
					gradient={{ from: 'red', to: 'cyan' }}
				>
					Hire Me
				</Button>
			</Container>
		</>
	)
}

export default HomePage

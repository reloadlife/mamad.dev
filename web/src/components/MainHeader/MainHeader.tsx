import { useBooleanToggle } from '@mantine/hooks'
import {
	createStyles,
	Header,
	Group,
	Container,
	Burger,
	useMantineTheme,
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 56,

		[theme.fn.smallerThan('sm')]: {
			justifyContent: 'flex-start',
		},
	},

	links: {
		width: 260,

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	social: {
		width: 260,

		[theme.fn.smallerThan('sm')]: {
			width: 'auto',
			marginLeft: 'auto',
		},
	},

	burger: {
		marginRight: theme.spacing.md,

		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
					: theme.colors[theme.primaryColor][0],
			color: theme.colors[theme.primaryColor][
				theme.colorScheme === 'dark' ? 3 : 7
			],
		},
	},
}))

interface MainHeaderProps {
	links: { link: string; label: string }[]
}

const MainHeader = ({ links }: MainHeaderProps) => {
	const [opened, toggleOpened] = useBooleanToggle(false)
	const [active, setActive] = React.useState(links[0].link)
	const { classes, cx } = useStyles()
	const theme = useMantineTheme()

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={cx(classes.link, {
				[classes.linkActive]: active === link.link,
			})}
			onClick={(event) => {
				event.preventDefault()
				setActive(link.link)
			}}
		>
			{link.label}
		</a>
	))

	return (
		<Header
			height={56}
			sx={{
				background:
					theme.colorScheme === 'dark'
						? theme.colors.dark[8]
						: theme.colors.gray[0],
			}}
		>
			<Container className={classes.inner}>
				<Burger
					opened={opened}
					onClick={() => toggleOpened()}
					size="sm"
					className={classes.burger}
				/>
				<Group className={classes.links} spacing={5}>
					{items}
				</Group>
			</Container>
		</Header>
	)
}

export default MainHeader

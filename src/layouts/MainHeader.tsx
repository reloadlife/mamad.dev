import {
	createStyles,
	Header,
	Group,
	Container,
	useMantineTheme,
	useMantineColorScheme,
	ActionIcon,
} from '@mantine/core'
import { Sun, MoonStars } from 'tabler-icons-react'
import { useState } from 'react'
import { useWindowScroll } from '@mantine/hooks'
import { useRouter } from 'next/router'

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
	links: { link: string; label: string | React.ReactNode }[]
}

const MainHeader = ({ links }: MainHeaderProps) => {
	const [active, setActive] = useState(links[0].link)
	const { classes, cx } = useStyles()
	const theme = useMantineTheme()

	const { colorScheme, toggleColorScheme } = useMantineColorScheme()

	const scrollTo = useWindowScroll()[1]
	const router = useRouter()

	const items = links.map((link) => (
		<a
			key={link.link}
			href={link.link}
			className={cx('cursive-font', classes.link, {
				[classes.linkActive]: active === link.link,
			})}
			onClick={(event) => {
				event.preventDefault()
				if (router.asPath != '/') {
					router.push('/')
					return
				}
				setActive(link.link)

				if (link.link === '/') {
					scrollTo({ y: 0 })
				}

				if (link.link === '/#about') {
					document.getElementById('about')?.scrollIntoView({
						behavior: 'smooth',
					})
				}

				if (link.link === '/#contact') {
					document.getElementById('contact')?.scrollIntoView({
						behavior: 'smooth',
					})
				}

				if (link.link === '/#resume') {
					document.getElementById('resume')?.scrollIntoView({
						behavior: 'smooth',
					})
				}
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
				position: 'sticky',
			}}
		>
			<Container className={classes.inner}>
				<Group spacing={5}>{items}</Group>

				<ActionIcon
					onClick={() => toggleColorScheme()}
					size="lg"
					sx={{
						backgroundColor:
							theme.colorScheme === 'dark'
								? theme.colors.dark[6]
								: theme.colors.gray[0],
						color:
							theme.colorScheme === 'dark'
								? theme.colors.yellow[4]
								: theme.colors.blue[6],
					}}
				>
					{colorScheme === 'dark' ? (
						<Sun size={18} />
					) : (
						<MoonStars size={18} />
					)}
				</ActionIcon>
			</Container>
		</Header>
	)
}

export default MainHeader

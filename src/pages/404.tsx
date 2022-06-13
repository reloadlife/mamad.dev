import type { NextPage } from 'next'
import {useRouter} from 'next/router'
import { Box } from '@mantine/core'
import {
	Title,
	Text,
	Button,
	Container,
	Group,
	useMantineTheme,
} from '@mantine/core'

const Error404Page: NextPage = () => {
	const theme = useMantineTheme()
	const router = useRouter()

	return (
		<Container
			sx={{
				paddingTop: 80,
				paddingBottom: 80,
			}}
		>
			<Box
				sx={{
					textAlign: 'center',
					fontWeight: 900,
					fontSize: 220,
					lineHeight: 1,
					marginBottom: theme.spacing.xl * 1.5,
					color:
						theme.colorScheme === 'dark'
							? theme.colors.dark[4]
							: theme.colors.gray[2],

					[theme.fn.smallerThan('sm')]: {
						fontSize: 120,
					},
				}}
			>
				404
			</Box>
			<Title
				sx={{
					fontFamily: `Greycliff CF, ${theme.fontFamily}`,
					textAlign: 'center',
					fontWeight: 900,
					fontSize: 38,

					[theme.fn.smallerThan('sm')]: {
						fontSize: 32,
					},
				}}
			>
				What are you searching for ?!, You are lost my friend ... :)
				(╯°□°)╯︵ ┻━┻
			</Title>
			<Text
				color="dimmed"
				size="lg"
				align="center"
				sx={{
					maxWidth: 500,
					margin: 'auto',
					marginTop: theme.spacing.xl,
					marginBottom: theme.spacing.xl * 1.5,
				}}
			>
				Unfortunately, this is only a 404 page. You may have mistyped
				the address, or the page has been moved to another URL.
			</Text>
			<Group position="center">
				<Button<'a'>
					component="a"
					variant="subtle"
					size="md"
					onClick={
						(e) => {
							e.preventDefault()
							router.push('/')
						}
					}
					href={'/'}
				>
					Take me back to home page
				</Button>
			</Group>
		</Container>
	)
}

export default Error404Page
